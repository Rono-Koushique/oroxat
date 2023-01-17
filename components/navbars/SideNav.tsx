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
    activeSection?: string;
};

export default function SideNav({
    title,
    sidebarLinks,
    className,
    activeSection,
}: Props) {
    return (
        <nav
            className={`sticky top-2 self-start ${className ? className : ""}`}
        >
            <h2 className="text-2xl text-neutral-500 font-semibold">{title}</h2>
            <ol className="flex flex-col gap-y-1 mt-4">
                {sidebarLinks.map((sidebarLink) => {
                    return (
                        <li key={sidebarLink.title}>
                            <Link href={sidebarLink.href}>
                                <div
                                    className={`w-full px-6 py-8 border border-fuchsia-100 hover:bg-fuchsia-50 ${
                                        activeSection === sidebarLink.href.slice(1)
                                            ? "bg-fuchsia-100"
                                            : ""
                                    }`}
                                >
                                    <p className="font-semibold text-fuchsia-700">
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
