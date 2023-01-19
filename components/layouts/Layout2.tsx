import React from "react";
import BreadCrumb from "../extras/BreadCrumb";
import Wall from "../containers/Wall";
import Frame from "../containers/Frame";
import SideNav from "../navbars/SideNav";

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
                <Frame className="grid max-w-6xl grid-cols-1 px-8 pt-4 pb-16 mx-auto lg:grid-cols-9 gap-x-8 lg:px-12 lg:pb-20">
                    <SideNav
                        title={sidebarTitle}
                        sidebarLinks={sectionLinks}
                        currentSection={currentSection}
                    />
                    <Frame className="flex flex-col w-full lg:col-span-6 h-fit gap-y-16">
                        {children}
                    </Frame>
                </Frame>
            </Wall>
        </>
    );
}
