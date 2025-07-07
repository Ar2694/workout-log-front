import useStateManager from "hooks/useStateManager";
import React, { useContext } from "react";

const DialogContext = React.createContext<any | null>(null);

export default function DialogProvider(props: any) {
    const dialog = useStateManager(false);
    const { state, set } = dialog;

    const context = {
        actions: props.actions instanceof Function ? props.actions(dialog) : null,
        close: () => set(false),
        open: () => set(true),
        toggle: () => set(!state),
        dialog: state
    }

    return (
        <>  {state &&

            <DialogContext.Provider value={context}>
                {props.children}
            </DialogContext.Provider>
        }

            {props.button && React.cloneElement(props.button, { onClick: context.open })}
        </>
    );
}

export const useDialogContext = () => useContext(DialogContext);