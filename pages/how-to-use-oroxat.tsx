import React from "react";
import Head from "next/head";
import Layout1 from "@/components/layouts/Layout1";
import Layout2 from "@/components/layouts/Layout2";

const pageLinks = [
    {
        title: "home",
        href: "/",
    },
    {
        title: "how to use oroxat",
        href: "/how-to-use-oroxat",
    },
];

const sectionLinks = [
    {
        title: "Oral treatment with TIW dosage",
        href: "#oral-treatment-with-tiw-dosage",
    },
    {
        title: "Flexible starting dose regimen",
        href: "#flexible-starting-dose-regimen",
    },
    {
        title: "Starting patients on OROXAT",
        href: "#starting-patients-on-oroxat",
    },
];

type Props = {};

export default function HowToUseOroxat({}: Props) {
    const [currentSection, setCurrentSection] = React.useState<string>(
        sectionLinks[0].href.slice(1)
    );
    React.useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            sectionLinks.forEach((section) => {
                const element = document.getElementById(section.href.slice(1));
                const elementPosition = element?.offsetTop;

                if (elementPosition && scrollPosition >= elementPosition) {
                    setCurrentSection(section.href.slice(1));
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Oroxat</title>
                <meta
                    name="description"
                    content="OROXAT is a powerful and effective medication for managing symptomatic anaemia caused by chronic kidney disease. With its unique formula, OROXEN provides fast relief and long-lasting results for patients suffering from this condition."
                />
                <meta
                    name="keywords"
                    content="OROXAT, symptomatic anaemia, chronic kidney disease, medication, relief, fast relief, long-lasting results, patients"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Layout1>
                <Layout2
                    pageLinks={pageLinks}
                    sectionLinks={sectionLinks}
                    sidebarTitle="How to use OROXAT"
                    currentSection={currentSection}
                >
                    <div className="content flex flex-col gap-8">
                        <section
                            id="oral-treatment-with-tiw-dosage"
                            className="flex flex-col"
                        >
                            <h1>
                                OROXAT offers the convenience of oral
                                administration1 with a three times per week
                                tablet on non-consecutive days
                            </h1>
                        </section>
                    </div>
                </Layout2>
            </Layout1>
        </>
    );
}
