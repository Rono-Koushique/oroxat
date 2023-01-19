import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Wall from "../containers/Wall";
import Frame from "../containers/Frame";

interface PageLink {
    title: string;
    href: string;
}

type Props = {
    pageLinks: PageLink[];
};

export default function BreadCrumb({ pageLinks }: Props) {
    return (
        <Wall>
            <Frame className="max-w-6xl mx-auto px-8 lg:px-12 py-6">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1">
                        {pageLinks.map((pageLink, idx) => {
                            return (
                                <>
                                    {idx !== 0 && (
                                        <Icon
                                            className="text-lg"
                                            icon="material-symbols:chevron-right"
                                        />
                                    )}
                                    <li>
                                        {idx !== pageLinks.length - 1 ? (
                                            <Link
                                                key={pageLink.title}
                                                href={pageLink.href}
                                                className="flex items-center gap-x-1
                                            font-medium text-neutral-700 hover:text-fuchsia-700"
                                            >
                                                {pageLink.href === "/" && (
                                                    <Icon
                                                        className="text-lg"
                                                        icon="material-symbols:home"
                                                    />
                                                )}
                                                <span className="capitalize text-sm leading-none">
                                                    {pageLink.title}
                                                </span>
                                            </Link>
                                        ) : (
                                            <span
                                                key={pageLink.title}
                                                className="flex items-center capitalize text-sm leading-none cursor-default
                                                        font-medium text-neutral-700"
                                            >
                                                {pageLink.title}
                                            </span>
                                        )}
                                    </li>
                                </>
                            );
                        })}
                    </ol>
                </nav>
            </Frame>
        </Wall>
    );
}
