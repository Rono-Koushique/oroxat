import React from "react";
import BreadCrumb from "../extras/BreadCrumb";
import Wall from "../containers/Wall";
import { Waypoint } from "react-waypoint";
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
    activeSection: string;
    setActiveSection: Function;
};

export default function Layout2({
    pageLinks,
    sectionLinks,
    sidebarTitle,
    children,
    activeSection,
    setActiveSection
}: Props) {
    return (
        <>
            <BreadCrumb pageLinks={pageLinks} />
            <Wall>
                <Waypoint
                    onEnter={() =>
                        setActiveSection(sectionLinks[0].href.slice(1))
                    }
                />
                <Frame className="grid max-w-6xl grid-cols-1 px-8 pt-4 pb-16 mx-auto lg:grid-cols-9 gap-x-8 lg:px-12 lg:pb-20">
                    <SideNav
                        title={sidebarTitle}
                        sidebarLinks={sectionLinks}
                        activeSection={activeSection}
                    />
                    <Frame className="flex flex-col w-full lg:col-span-6 h-fit gap-y-16">
                        {children}
                    </Frame>
                </Frame>
            </Wall>
        </>
    );
}
