import React from "react";

type Props = {
    children: React.ReactNode | React.ReactNode[];
    onClick: Function;
    className?: string;
};

export default function FooterBtn({ children, onClick, className }: Props) {
    return (
        <button
            className={`uppercase bg-fuchsia-900 font-medium text-sm text-white px-6 py-4 ${
                className ? className : ""
            }`}
            onClick={() => onClick()}
        >
            {children}
        </button>
    );
}
