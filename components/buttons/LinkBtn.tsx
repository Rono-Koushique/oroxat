import Link from "next/link";
import React from "react";

type Props = {
    children: React.ReactNode | React.ReactNode[];
    href: string;
    className?: string;
};

export default function LinkBtn({ children, href, className }: Props) {
    return (
        <Link href={href} scroll={false}>
            <div
                className={`uppercase bg-fuchsia-900 font-medium text-sm text-center text-white px-4 py-6 md:px-6 ${
                    className ? className : ""
                }`}
            >
                {children}
            </div>
        </Link>
    );
}
