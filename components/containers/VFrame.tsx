import React from "react";

interface Props {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
}

export default function VFrame({ children, className }: Props) {
    return (
        <div
            className={`max-w-6xl mx-auto flex flex-col px-6 py-16 gap-12
                    md:px-8 md:py-20 md:gap-16
                    lg:px-12 ${className!}`}
        >
            {children}
        </div>
    );
}
