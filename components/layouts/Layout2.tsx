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
};

export default function Layout2({
    pageLinks,
    sectionLinks,
    sidebarTitle,
    children
}: Props) {
    const [activeSection, setActiveSection] = React.useState<string>(
        sectionLinks[0].href.slice(1)
    );
    return (
        <>
            <BreadCrumb pageLinks={pageLinks} />
            <Wall>
                <Waypoint
                    onEnter={() =>
                        setActiveSection(sectionLinks[0].href.slice(1))
                    }
                />
                <Frame
                    className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-9 gap-x-8 px-8 pt-4 pb-16
                            lg:px-12 lg:pb-20"
                >
                    <SideNav
                        title={sidebarTitle}
                        sidebarLinks={sectionLinks}
                        activeSection={activeSection}
                    />
                    <Frame className="lg:col-span-6 w-full flex flex-col h-fit gap-y-16">
                        {children}
                    </Frame>
                </Frame>
            </Wall>
        </>
    );
}
