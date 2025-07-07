import PageHandler from "hooks/usePageHandler/classes/PageHandler";
import React from "react";
import LoaderView from "../LoaderView";

interface Props {
    pageHandler: PageHandler,
    children: React.ReactNode
}

interface PageProps {
    pageHandler: PageHandler
}

export default function PageLoaderView({ pageHandler, children }: Props) {
    const { data } = pageHandler;
    
    return (
        <LoaderView bool={data !== null}>
            {React.Children.map(children, (child: any) => {
                // Check if the child is a valid React element to avoid errors with text nodes or other non-element children
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { pageHandler } as PageProps);
                }
                return child; // If not a valid element, return the child as is
            })}
        </LoaderView>
    )
}