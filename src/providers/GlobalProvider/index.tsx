
import useGlobalManager from "hooks/useGlobalManager";
import useStateManager from "hooks/useStateManager";
import { useContext, createContext, useEffect } from "react";

export interface GlobalProps {
    children?: React.ReactNode;
}

const Context = createContext<any | null>(null);

export default function GlobalProvider(props: GlobalProps) {
    const { globalState, setGlobal, updateGlobal, clearGlobal } = useGlobalManager(JSON.parse(localStorage.getItem("global") || '{}') );

    const context = {
        globalState,
        setGlobal,
        updateGlobal,
        clearGlobal
    }
    return (
        <Context.Provider value={context}>
            {props.children}
        </Context.Provider>
    );
    
}


export const useGlobal = () => useContext(Context);