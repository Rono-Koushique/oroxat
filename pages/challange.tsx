import Frame from "@/components/containers/Frame";
import Wall from "@/components/containers/Wall";
import BreadCrumb from "@/components/extras/BreadCrumb";
import Layout1 from "@/components/layouts/Layout1";
import SideNav from "@/components/navbars/SideNav";
import Head from "next/head";
import React from "react";
import oxygen from "public/images/page-challange/oxygen.svg";
import erythropoietin from "public/images/page-challange/erythropoietin.svg";
import liver from "public/images/page-challange/liver.svg";
import kidney from "public/images/page-challange/kidney.svg";
import BodyImage from "@/components/cards/BodyImage";
import ReviewImage1 from "public/images/review-1.png";
import ReviewSlide from "@/components/slides/ReviewSlide";
import FooterBtn from "@/components/buttons/FooterBtn";
import Layout2 from "@/components/layouts/Layout2";
import AdverseEffect from "@/components/sections/AdverseEffect";

const pageLinks = [
    {
        title: "home",
        href: "/",
    },
    {
        title: "the challange",
        href: "/challange",
    },
];

const sectionLinks = [
    {
        title: "Understanding Anaemia of CKD",
        href: "#understanding-anaemia-of-ckd",
    },
    {
        title: "Treatment Challenges",
        href: "#treatment-challenges",
    },
    {
        title: "The need for an alternate treatment option",
        href: "#the-need-for-an-alternate-treatment-option",
    },
];

type Props = {};

export default function Challange({}: Props) {
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
                    sidebarTitle="The Challange"
                    currentSection={currentSection}
                >
                    <div className="content flex flex-col gap-8">
                        <section
                            id="understanding-anaemia-of-ckd"
                            className="flex flex-col"
                        >
                            <h1>Understanding anaemia of CKD</h1>
                            <p>
                                Anaemia is a common feature of chronic kidney
                                disease,1 and one of the hallmarks of advanced
                                CKD.
                            </p>
                            <p>
                                The prevalence of anaemia increases as CKD
                                progresses, from 42.5% at stage 3b CKD to 83.7%
                                in people with stage 5 CKD.
                            </p>
                            <p>
                                Anaemia of CKD was previously attributed
                                primarily to decreased production of
                                erythropoietin (EPO).
                            </p>
                            <p>
                                It is now known to be caused by a number of
                                factors, including:
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 holder">
                                <BodyImage
                                    imgSrc={kidney}
                                    caption="Reduced oxygen sensing in the kidney"
                                />
                                <BodyImage
                                    imgSrc={erythropoietin}
                                    caption="Reduced
                                        erythropoietin
                                        production"
                                />
                                <BodyImage
                                    imgSrc={liver}
                                    caption="Chronic inflammation
                                        resulting in
                                        increased hepcidin levels"
                                />
                                <BodyImage
                                    imgSrc={oxygen}
                                    caption="Iron deficiency"
                                />
                            </div>

                            <p>As CKD progresses:</p>
                            <ul>
                                <li>
                                    EPO production decreases, leading to a
                                    reduction in red blood cells and haemoglobin
                                </li>
                                <li>
                                    Hepcidin levels are elevated due to
                                    inflammation and decreased renal excretion
                                </li>
                                <li>
                                    Elevated hepcidin leads to a reduction in
                                    absorption, recycling and mobilisation of
                                    iron
                                </li>
                            </ul>
                            <p className="fade">
                                CKD, chronic kidney disease; EPO,
                                erythropoietin.
                            </p>
                        </section>
                        <section
                            id="treatment-challenges"
                            className="flex flex-col"
                        >
                            <h1>Treatment Challanges</h1>
                            <h3>A specialist&apos;s view</h3>
                            <ReviewSlide
                                className="slide"
                                imgSrc={ReviewImage1}
                                title="Professor Anjon Banerjee on kidney diseases"
                                asSlide={false}
                            />
                            <p>
                                Management of anaemia of CKD can often be
                                sub-optimal.
                            </p>
                            <p>
                                Current treatment of anaemia of CKD is mainly
                                based on iron supplements and ESAs
                                (erythropoiesis-stimulating agents).
                            </p>
                            <p>
                                These treatments target individual factors and
                                not the underlying pathology of anaemia of CKD.
                            </p>
                            <p>
                                When ESA treatment commences, a state of
                                “functional” iron deficiency may develop as a
                                result of elevated hepcidin levels and increased
                                iron demand, blunting the therapeutic response
                                to ESA.
                            </p>
                            <p className="fade">
                                CKD, chronic kidney disease; ESA,
                                erythropoiesis-stimulating agent.
                            </p>
                        </section>
                        <section
                            id="the-need-for-an-alternate-treatment-option"
                            className="flex flex-col"
                        >
                            <h1>The need for an alternate treatment option</h1>
                            <p>
                                The limitations of current therapies have
                                highlighted the need for alternative treatment
                                options.
                            </p>
                            <p>
                                Advances in the study of CKD-associated anaemia
                                have focused on the pathophysiology of anaemia
                                with the hope of discovering more targeted and
                                physiological therapies.
                            </p>
                            <p>
                                The discovery of{" "}
                                <b>hypoxia-inducible factors (HIFs)</b> has led
                                to the development of an alternate category of
                                drugs that stimulate erythropoiesis by
                                activating the HIF pathway.
                            </p>
                            <div className="holder">
                                <FooterBtn onClick={() => {}} className="w-fit">
                                    discover the hif pathway
                                </FooterBtn>
                            </div>

                            <p className="fade">
                                CKD, chronic kidney disease; HIF,
                                hypoxia-inducible factor.
                            </p>
                            <p>EVZ_2022_0252_UK / August 2022</p>
                            <AdverseEffect />
                        </section>
                    </div>
                </Layout2>
            </Layout1>
        </>
    );
}
