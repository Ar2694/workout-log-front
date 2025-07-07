import React, { useContext } from "react";

import dialogs from "hooks/useModal/components"
import _useModal from "hooks/useModal";

const ModalContext = React.createContext<any | null>(null);

export default function ModalProvider(props: any) {
    const modal = _useModal();
    const { modals, ...controls } = modal;
    const dialogslist: any = dialogs;

    const activeModals = modals.map((props: any, k: any) => {
        const Modal = dialogslist[props.name];
        return <Modal key={k} modal={{ ...controls, ...props }} />
    }, [])

    return (
        <ModalContext.Provider value={modal}>
            {props.children}
            {activeModals}
        </ModalContext.Provider>
    );
}

export const useModal = () => useContext(ModalContext);