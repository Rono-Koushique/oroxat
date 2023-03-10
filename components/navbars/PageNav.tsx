import Link from "next/link";
import React from "react";

interface NavLinks {
    title: string;
    href: string;
}

type Props = {
    title: string;
    sidebarLinks: NavLinks[];
    className?: string;
    currentSection?: string;
};

export default function PageNav({
    title,
    sidebarLinks,
    className,
    currentSection,
}: Props) {

    return (
        <nav
            className={`hidden lg:block col-span-3 sticky top-2 self-start w-full ${
                className ? className : ""
            }`}
        >
            <h2 className="text-2xl text-neutral-500 font-semibold">{title}</h2>
            <ol className="flex flex-col gap-y-1 mt-4">
                {sidebarLinks.map((sidebarLink) => {
                    return (
                        <li key={sidebarLink.title}>
                            <Link href={sidebarLink.href} scroll={false}>
                                <div
                                    className={`w-full px-6 py-8 border border-fuchsia-100 hover:bg-fuchsia-50
                                        ${
                                            currentSection &&
                                            currentSection ===
                                                sidebarLink.href.slice(1)
                                                ? "bg-fuchsia-100"
                                                : ""
                                        }
                                    `}
                                >
                                    <p className="font-semibold text-fuchsia-700 text-left">
                                        {sidebarLink.title}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
