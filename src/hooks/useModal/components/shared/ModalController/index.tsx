
import React, { useEffect, useState } from "react";

interface Props {
    children: React.ReactNode,
    className?: string,
    open?: boolean | null
    data?: any
    modal?: any,
    defaultState?: any
}

export default function ModalController({ children, ...props }: Props) {
    const { modal } = props;
    const [state, setState] = useState({ ...modal, open: !modal.open });

    const onCloseModal = modal.onCloseModal(state.id);
    const onClose = () => modal.closeModal(state.id)

    useEffect(() => {
        setState({ ...modal });
    }, [modal.open])

    return (
        <>
            {
                React.Children.map(children, (child: any) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {  ...state, onCloseModal, onClose } as any);
                    }
                    return child;
                })
            }
        </>
    )
}
