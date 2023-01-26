import React from "react";
import Head from "next/head";
import Image from "next/image";
import Layout1 from "@/components/layouts/Layout1";
import Layout2 from "@/components/layouts/Layout2";
import Layout3 from "@/components/layouts/Layout3";

import dd1 from "public/images/page-evidence/page-dd/dd1.jpeg";
import dd2 from "public/images/page-evidence/page-dd/dd2.png";
import dd3 from "public/images/page-evidence/page-dd/dd3.png";
import dd4 from "public/images/page-evidence/page-dd/dd4.jpeg";
import dd5 from "public/images/page-evidence/page-dd/dd5.png";
import dd6 from "public/images/page-evidence/page-dd/dd6.jpg";
import AdverseEffect from "@/components/sections/AdverseEffect";

const pageLinks = [
    {
        title: "home",
        href: "/",
    },
    {
        title: "see the evidence",
        href: "/evidence",
    },
    {
        title: "dialysis dependent",
        href: "/evidence/dialysis-dependent",
    },
];

const sectionLinks = [
    {
        title: "OROXAT maintains HB levels similar to ESA in new dialysis patients",
        href: "#oroxat-maintains-hb-levels-similar-to-esa-in-new-dialysis-patients",
    },
    {
        title: "Oroxat reduces IV iron infusions in dialysis patients",
        href: "#oroxat-reduces-iv-iron-infusions-in-dialysis-patients",
    },
    {
        title: "Oroxat SUMMARY OF EFFICACY IN DD",
        href: "#oroxat-summary-of-efficacy-in-dd",
    },
];

type Props = {};

export default function DialysisDependent({}: Props) {
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
                    sidebarTitle="Dialysis dependent"
                    currentSection={currentSection}
                >
                    <Layout3 className="content">
                        <section
                            id="oroxat-maintains-hb-levels-similar-to-esa-in-new-dialysis-patients"
                            className="flex flex-col"
                        >
                            <h1>
                                OROXAT maintains HB levels similar to ESA in new
                                dialysis patients
                            </h1>
                            <div className="holder">
                                <Image src={dd1} alt="" />
                            </div>
                            <h4>
                                Patients recently started on dialysis and
                                treated with EVRENZO achieved and maintained
                                target Hb levels comparable with those treated
                                with ESA
                            </h4>
                            <div className="holder">
                                <Image className="w-full" src={dd2} alt="" />
                            </div>
                            <h4>
                                Patients recently started on dialysis and
                                treated with EVRENZO received less monthly IV
                                iron than those treated with ESA
                            </h4>
                            <div className="holder">
                                <Image className="w-full" src={dd3} alt="" />
                            </div>
                            <p className="fade">
                                CKD, chronic kidney disease; DD,
                                dialysis-dependent; ESA,
                                erythropoiesis-stimulating agent; FAS, full
                                analysis set; IDD, incident dialysis-dependent;
                                IV, intravenous; SD, stable dialysis.
                            </p>
                        </section>
                        <section
                            id="oroxat-reduces-iv-iron-infusions-in-dialysis-patients"
                            className="flex flex-col"
                        >
                            <h1>
                                Oroxat reduces IV iron infusions in dialysis
                                patients
                            </h1>
                            <div className="holder">
                                <Image src={dd4} alt="" />
                            </div>
                            <h4>
                                Fewer IV iron infusions were administered in
                                patients treated with EVRENZO vs those treated
                                with ESA
                            </h4>
                            <div className="holder">
                                <Image src={dd5} alt="" />
                            </div>
                            <p>
                                DD, dialysis-dependent; ESA,
                                erythropoiesis-stimulating agent; FAS, full
                                analysis set; IV, intravenous; PEY,
                                patient-exposure-year.
                            </p>
                        </section>
                        <section
                            id="oroxat-summary-of-efficacy-in-dd"
                            className="flex flex-col"
                        >
                            <h1>Oroxat SUMMARY OF EFFICACY IN DD</h1>
                            <div className="holder">
                                <Image src={dd6} alt="" />
                            </div>
                            <h4>
                                In dialysis-dependent CKD, EVRENZO can help your
                                patients achieve and maintain target Hb levels
                            </h4>
                            <ul>
                                <li>
                                    EVRENZO demonstrated non-inferiority in Hb
                                    correction and maintenance when compared to
                                    ESAs
                                </li>
                                <li>
                                    Treatment with EVRENZO resulted in a reduced
                                    use of IV iron compared with treatment with
                                    ESAs
                                </li>
                            </ul>
                            <p className="fade">
                                CKD, chronic kidney disease; ESA,
                                erythropoiesis-stimulating agent; Hb,
                                haemoglobin; IV, intravenous.
                            </p>
                            <div className="mt-8">
                                <AdverseEffect />
                            </div>
                        </section>
                    </Layout3>
                </Layout2>
            </Layout1>
        </>
    );
}
