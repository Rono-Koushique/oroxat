import React from "react";
import BreadCrumb from "../extras/BreadCrumb";
import Wall from "../containers/Wall";
import Frame from "../containers/Frame";
import SideNav from "../navbars/PageNav";

interface PageLink {
    title: string;
    href: string;
}

interface SectionLink {
    title: string;
    href: string;
}

type Props = {
    pageLinks: PageLink[];
    sectionLinks: SectionLink[];
    sidebarTitle: string;
    children: React.ReactNode | React.ReactNode[];
    currentSection?: string;
};

export default function Layout2({
    pageLinks,
    sectionLinks,
    sidebarTitle,
    children,
    currentSection
}: Props) {
    return (
        <>
            <BreadCrumb pageLinks={pageLinks} />
            <Wall>
                <Frame className="max-w-6xl grid grid-cols-1 px-6 pt-4 pb-16 mx-auto gap-8
                                lg:grid-cols-9 lg:px-12 lg:pb-20">
                    <SideNav
                        title={sidebarTitle}
                        sidebarLinks={sectionLinks}
                        currentSection={currentSection}
                    />
                    <Frame className="w-full h-fit lg:col-span-6">
                        {children}
                    </Frame>
                </Frame>
            </Wall>
        </>
    );
}
