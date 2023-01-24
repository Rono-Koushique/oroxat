import React from "react";
import Wall from "../containers/Wall";
import Frame from "../containers/Frame";

type Props = {
    children: React.ReactNode | React.ReactNode[];
};

export default function Layout3({ children }: Props) {
    return (
        <Wall>
            <Frame className="pt-4 pb-16 lg:pb-20">{children}</Frame>
        </Wall>
    );
}
