import React from "react";
import Head from "next/head";
import Layout1 from "@/components/layouts/Layout1";
import Layout2 from "@/components/layouts/Layout2";
import Layout3 from "@/components/layouts/Layout3";
import Image from "next/image";

import ndd1 from "public/images/page-evidence/page-ndd/ndd1.jpeg";
import ndd2 from "public/images/page-evidence/page-ndd/ndd2.png";
import ndd3 from "public/images/page-evidence/page-ndd/ndd3.png";
import ndd4 from "public/images/page-evidence/page-ndd/ndd4.jpeg";
import ndd5 from "public/images/page-evidence/page-ndd/ndd5.png";
import ndd6 from "public/images/page-evidence/page-ndd/ndd6.png";
import ndd7 from "public/images/page-evidence/page-ndd/ndd7.png";
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
        title: "non dialysis dependent",
        href: "/evidence/non-dialysis-dependent",
    },
];

const sectionLinks = [
    {
        title: "OROXAT patients reached and maintained target Hb",
        href: "#oroxat-patients-reached-and-maintained-target-hb",
    },
    {
        title: "OROXAT patients maintained target Hb on a stable dose",
        href: "#oroxat-patients-maintained-target-hb-on-a-stable-dose",
    },
    {
        title: "OROXAT Hb levels comparable with ESA",
        href: "#oroxat-hb-levels-comparable-with-esa",
    },
    {
        title: "OROXAT reduced use of IV iron compared with ESA",
        href: "#oroxat-reduced-use-of-iv-iron-compared-with-esa",
    },
    {
        title: "OROXAT summary of efficacy in NDD",
        href: "#oroxat-summary-of-efficacy-in-ndd",
    },
];

type Props = {};

export default function NonDialysisDependent({}: Props) {
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
                    sidebarTitle="Non dialysis dependent"
                    currentSection={currentSection}
                >
                    <Layout3 className="content">
                        <section
                            id="oroxat-patients-reached-and-maintained-target-hb"
                            className="flex flex-col"
                        >
                            <h1>
                                OROXAT patients reached and maintained target Hb
                            </h1>
                            <div className="holder">
                                <Image src={ndd1} alt="" />
                            </div>
                            <h4>
                                Patients treated with OROXAT reached target Hb
                                levels and remained within the target range
                            </h4>
                            <div className="holder">
                                <Image className="w-full" src={ndd2} alt="" />
                            </div>
                            <p className="fade">
                                DD, dialysis-dependent; ESA,
                                erythropoiesis-stimulating agent; FAS, full
                                analysis set; Hb, haemoglobin; IDD, incident
                                dialysis-dependent; NDD, non-dialysis-dependent;
                                SE, standard error.
                            </p>
                        </section>
                        <section
                            id="oroxat-patients-maintained-target-hb-on-a-stable-dose"
                            className="flex flex-col"
                        >
                            <h1>
                                OROXAT patients maintained target Hb on a stable
                                dose
                            </h1>
                            <div className="holder">
                                <Image src={ndd1} alt="" />
                            </div>
                            <h4>
                                Patients maintained target Hb levels on a stable
                                dose of OROXAT
                            </h4>
                            <div className="holder">
                                <Image className="w-full" src={ndd3} alt="" />
                            </div>
                            <ul>
                                <li>
                                    The dose of OROXAT remained stable up to
                                    Week 104
                                </li>
                            </ul>
                            <p className="fade">
                                DD, dialysis-dependent; ESA,
                                erythropoiesis-stimulating agent; FAS, full
                                analysis set; Hb, haemoglobin; IDD, incident
                                dialysis-dependent; NDD, non-dialysis-dependent;
                                SE, standard error.
                            </p>
                        </section>
                        <section
                            id="oroxat-hb-levels-comparable-with-esa"
                            className="flex flex-col"
                        >
                            <h1>OROXAT Hb levels comparable with ESA</h1>
                            <div className="holder">
                                <Image src={ndd4} alt="" />
                            </div>
                            <h4>
                                Patients treated with OROXAT achieved and
                                maintained Hb levels comparable with ESA
                            </h4>
                            <div className="holder">
                                <Image className="w-full" src={ndd5} alt="" />
                            </div>
                            <p>
                                The Phase Ill DOLOMITES study evaluated the
                                efficacy and safety of OROXAT compared to
                                darbepoetin-alfa for the treatment of anaemia in
                                NDD patients with stage 3-5 CKD. In the primary
                                endpoint analysis, the study demonstrated
                                non-inferiority of OROXAT to darbepoetin-alfa in
                                the proportion of patients achieving correction
                                of Hb levels during the first 24 weeks of
                                treatment (89.5% vs. 78%, respectively)
                            </p>
                            <p className="fade">
                                CKD, chronic kidney disease; CI, confidence
                                interval; DD, dialysis-dependent; ESA,
                                erythropoiesis-stimulating agent; EOT, end of
                                treatment; Hb, haemoglobin; IDD, incident
                                dialysis-dependent; NDD, non-dialysis-dependent;
                                PPS, per protocol set.
                            </p>
                        </section>
                        <section
                            id="oroxat-reduced-use-of-iv-iron-compared-with-esa"
                            className="flex flex-col"
                        >
                            <h1>
                                OROXAT reduced use of IV iron compared with ESA
                            </h1>
                            <div className="holder">
                                <Image src={ndd4} alt="" />
                            </div>
                            <h4>
                                Fewer patients treated with OROXAT received IV
                                iron than those treated with ESA
                            </h4>
                            <div className="holder">
                                <Image className="w-full" src={ndd6} alt="" />
                            </div>
                            <ul>
                                <li>
                                    EVRENZO was effective without routine use of
                                    IV iron in most patients with non-dialysis
                                    dependent CKD
                                </li>
                            </ul>
                            <p className="fade">
                                CKD, chronic kidney disease; CI, confidence
                                interval; DD, dialysis-dependent; ESA,
                                erythropoiesis-stimulating agent. IV,
                                intravenous; NDD, non-dialysis-dependent.
                            </p>
                        </section>
                        <section
                            id="oroxat-summary-of-efficacy-in-ndd"
                            className="flex flex-col"
                        >
                            <h1>OROXAT summary of efficacy in NDD</h1>
                            <div className="holder">
                                <Image className="w-full" src={ndd7} alt="" />
                            </div>
                            <h4>
                                In non-dialysis-dependent CKD, EVRENZO can help
                                your patients achieve and maintain target Hb
                                levels
                            </h4>
                            <ul>
                                <li>
                                    EVRENZO demonstrated statistical superiority
                                    in Hb correction and maintenance when
                                    compared to placebo and was non-inferior to
                                    ESAs in the DOLOMITES trial
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
