import React from "react";
import PageLoaderView from "../PageLoaderView";
import PageHandler from "hooks/usePageHandler/classes/PageHandler";
import PageContainer from "components/containers/PageContainer";
import ModalProvider from "providers/ModalProvider";

interface Props {
    className?: string | undefined,
    children: React.ReactNode,
    pageHandler: PageHandler
}

interface ChildProps {
    pageHandler: PageHandler
}

export default function PageHandlerView({ className, children, pageHandler }: Props) {
    return (
        <PageContainer className={className}>
            <PageLoaderView pageHandler={pageHandler}>
                <ModalProvider>
                    {React.Children.map(children, (child: any) => {
                        // Check if the child is a valid React element to avoid errors with text nodes or other non-element children
                        if (React.isValidElement(child)) {
                            return React.cloneElement(child, { pageHandler } as ChildProps);
                        }
                        return child; // If not a valid element, return the child as is
                    })}
                </ModalProvider>
            </PageLoaderView>
        </PageContainer>
    )
}
