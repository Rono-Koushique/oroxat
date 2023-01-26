import React from "react";
import Wall from "../containers/Wall";
import Frame from "../containers/Frame";

type Props = {
    className?: string;
    children: React.ReactNode | React.ReactNode[];
};

export default function Layout3({ className, children }: Props) {
    return (
        <Wall>
            <Frame
                className={`flex flex-col gap-8 md:gap-16 ${className!}`}
            >   
                {children}
            </Frame>
        </Wall>
    );
}
