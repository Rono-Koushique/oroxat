import Layout1 from "@/components/layouts/Layout1";
import Layout2 from "@/components/layouts/Layout2";
import Head from "next/head";
import React from "react";
import Oroxat1 from "public/images/page-oroxat/oroxat1.jpeg";
import Oroxat2 from "public/images/page-oroxat/oroxat2.png";
import Oroxat3 from "public/images/page-oroxat/oroxat3.png";
import Oroxat4 from "public/images/page-oroxat/oroxat4.jpeg";
import Oroxat5 from "public/images/page-oroxat/oroxat5.jpg";
import Oroxat6 from "public/images/page-oroxat/oroxat6.jpeg";
import Image from "next/image";
import ReviewSlide from "@/components/slides/ReviewSlide";
import FooterBtn from "@/components/buttons/FooterBtn";
import AdverseEffect from "@/components/sections/AdverseEffect";

const pageLinks = [
    {
        title: "home",
        href: "/",
    },
    {
        title: "introducing oroxat",
        href: "/oroxat",
    },
];

const sectionLinks = [
    {
        title: "The HIF pathway",
        href: "#the-hif-pathway",
    },
    {
        title: "OROXAT: a first-in-class treatment",
        href: "#oroxat-a-first-in-class-treatment",
    },
    {
        title: "OROXAT promotes a coordinated erythropoietic response",
        href: "#oroxat-promotes-a-coordinated-erythropoietic-response",
    },
    {
        title: "The place of OROXAT in management of anaemia of CKD",
        href: "#the-place-of-oroxat-in-management-of-anaemia-of-ckd",
    },
    {
        title: "Why OROXAT?",
        href: "#why-oroxat",
    },
];

type Props = {};

export default function Oroxat({}: Props) {
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
                    sidebarTitle="Introducing OROXAT"
                    currentSection={currentSection}
                >
                    <div className="content flex flex-col gap-8">
                        <section id="the-hif-pathway" className="flex flex-col">
                            <h1>The HIF pathway</h1>
                            <h3>
                                The HIF (hypoxia-inducible factor) pathway plays
                                a central role in erythropoiesis.
                            </h3>
                            <p>
                                It is the physiological mechanism by which the
                                body responds to low oxygen conditions, such as
                                those experienced at high altitude.
                            </p>
                            <p>
                                The HIF pathway affects all the key components
                                of eythropoiesis:
                            </p>
                            <ul>
                                <li>
                                    Increases erythropoietin (EPO) production
                                </li>
                                <li>Suppresses hepcidin production</li>
                                <li>
                                    Increases iron absorption, transport and
                                    mobilisation
                                </li>
                            </ul>
                            <h3>
                                The HIF pathway is critically important to
                                oxygen sensing
                            </h3>
                            <p>
                                In normoxic conditions, the HIF pathway is not
                                activated and the HIF-α subunit is rapidly
                                degraded via HIF prolyl-hydroxylase (HIF-PH):
                            </p>
                            <Image className="image" src={Oroxat1} alt="" />
                            <p>
                                In hypoxic conditions, the HIF pathway is
                                activated: the HIF-α subunit is not degraded,
                                allowing dimerisation with the HIF-ß subunit and
                                so inducing the transcription and translation of
                                target hypoxia response genes involved in
                                erythropoiesis, including:
                            </p>
                            <Image className="image" src={Oroxat2} alt="" />
                            <p>
                                In CKD, oxygen sensing via HIF is impaired, and
                                this contributes to the development of anaemia.
                            </p>
                            <p>
                                But inhibiting the breakdown of HIF offers the
                                opportunity to override the effect of CKD on
                                oxygen sensing as well stimulating the
                                production of erythropoetic genes and their
                                associated proteins.
                            </p>
                            <p className="fade">
                                CKD, chronic kidney disease; HIF,
                                hypoxia-inducible factor; HIF-PH,
                                hypoxia-inducible factor prolyl-hydroxylase;
                                EPO, erythropoietin.
                            </p>
                        </section>
                        <section id="oroxat-a-first-in-class-treatment">
                            <h1>OROXAT: a first-in-class treatment</h1>
                            <p>
                                OROXAT is a HIF-PH inhibitor, a class of drug
                                with a novel mechanism of action.
                            </p>
                            <h3>
                                OROXAT mimics the body&apos;s natural response
                                to hypoxia by activating the HIF pathway
                            </h3>
                            <Image className="image" src={Oroxat3} alt="" />
                            <p>
                                OROXAT inhibits HIF-PH, thus preventing
                                breakdown of HIF-α and activating the HIF
                                pathway
                            </p>
                            <p>
                                This induces transcription and translation of
                                genes involved in erythropoiesis
                            </p>
                            <p>
                                HIF-PH inhibitors induce activation of the genes
                                responsible for erythropoiesis, but do so in the
                                presence of normal oxygen tension.
                            </p>
                            <h3>
                                OROXAT reduces hepcidin levels and improves iron
                                bioavailability
                            </h3>
                            <p>
                                Through the inhibition of HIF-PH, OROXAT
                                stimulates a coordinated erythropoietic response
                                that not only{" "}
                                <b>increases erythropoietin (EPO)</b> levels,
                                but also <b>increases iron mobilisation</b>, as
                                well as helping to overcome the effects of
                                inflammation by <b>suppressing hepcidin</b>.
                            </p>
                            <Image className="image" src={Oroxat4} alt="" />
                            <p>See how OROXAT works:</p>
                            <ReviewSlide
                                className="image"
                                imgSrc={Oroxat5}
                                title="Professor Anjon Banerjee on kidney diseases"
                                asSlide={false}
                            />
                            <p className="body-p">
                                OROXAT is indicated for the treatment of adult
                                patients with symptomatic anaemia associated
                                with chronic kidney disease (CKD)
                            </p>
                            <p className="body-caption text-left">
                                CKD, chronic kidney disease; EPO,
                                erythropoietin; HIF, hypoxia-inducible factor;
                                HIF-PH, hypoxia-inducible factor
                                prolyl-hydroxylase.
                            </p>
                        </section>
                        <section id="oroxat-promotes-a-coordinated-erythropoietic-response">
                            <h1 className="body-h1">
                                OROXAT promotes a coordinated erythropoietic
                                response
                            </h1>
                            <p className="body-p">
                                By inhibiting HIF-PH, OROXAT stimulates a
                                coordinated erythropoietic response that:
                            </p>
                            <Image className="image" src={Oroxat6} alt="" />
                            <p className="body-caption text-left">
                                Hb, haemoglobin; HIF-PH, hypoxia-inducible
                                factor prolyl-hydroxylase; RBC, red blood cell.
                            </p>
                        </section>
                        <section id="the-place-of-oroxat-in-management-of-anaemia-of-ckd">
                            <h1>
                                The place of OROXAT in management of anaemia of
                                CKD
                            </h1>
                            <h3>
                                OROXAT has the potential to change the clinical
                                management of anaemia of CKD.
                            </h3>
                            <p>
                                Instead of treating the conditon as a deficiency
                                of EPO or iron, OROXAT addresses multiple
                                factors that contribute to anaemia.
                            </p>
                            <p>
                                Targeting the HIF pathway with HIF-PHIs may
                                offer an advance in clinical practice by
                                providing a more comprehensive and physiological
                                approach to the management of anaemia of CKD
                                than existing treatments.
                            </p>
                            <p>
                                OROXAT helps patients with anaemia of CKD:
                            </p>
                            <ul>
                                <li>
                                    To achieve and maintain their target Hb
                                    levels
                                </li>
                                <li>
                                    With a reduced use of IV iron compared to
                                    ESA
                                </li>
                                <li>
                                    And the convenience of oral administration4
                                    with a three times weekly tablet on
                                    non-consecutive days
                                </li>
                            </ul>
                            <p>
                                OROXAT (roxadustat) is indicated for treatment
                                of adult patients with symptomatic anaemia
                                associated with chronic kidney disease (CKD)
                            </p>
                            <p className="fade">
                                CKD, chronic kidney disease; EPO,
                                erythropoietin; ESA, erythropoiesis-stimulating
                                agent; HIF, hypoxia-inducible factor; HIF-PHI,
                                hypoxia-inducible factor prolyl-hydroxylase
                                inhibitor; IV, intravenous; TIW, three times
                                weekly.
                            </p>
                        </section>
                        <section id="why-oroxat">
                            <h1>Why OROXAT?</h1>
                            <h3>
                                OROXAT, a first-in-class treatment for adult
                                patients with symptomatic anaemia associated
                                with CKD, is like a breath of fresh air, at high
                                altitude
                            </h3>
                            <h4>Innovation</h4>
                            <ul>
                                <li>
                                    OROXAT&apos;s MoA leads to a coordinated
                                    erythropoietic response ultimately resulting
                                    in increased haemoglobin production
                                </li>
                                <li>
                                    OROXAT can help adult patients with
                                    symptomatic anaemia associated with CKD
                                    achieve and maintain their recommended Hb
                                    levels. In clinical studies, less IV iron
                                    was used in patients taking OROXAT compared
                                    to ESAs
                                </li>
                            </ul>
                            <h4>Confidence</h4>
                            <ul>
                                <li>
                                    The general safety profile of OROXAT was
                                    overall comparable to ESAs for the majority
                                    of safety variables evaluated and is
                                    reflective of the studied CKD populations
                                </li>
                            </ul>
                            <h4>Convenience</h4>
                            <ul>
                                <li>
                                    Oral administration with a three times
                                    weekly tablet, on non-consecutive days
                                </li>
                            </ul>
                            <p>
                                *Please see OROXAT SmPC for full safety profile
                                and further information on CV and mortality
                                risk.
                            </p>
                            <div className="lg:w-[20rem] flex flex-col gap-2">
                                <FooterBtn onClick={() => {}}>
                                    EXAMINE THE EVIDENCE
                                </FooterBtn>
                                <FooterBtn onClick={() => {}}>
                                    See the patient perspective
                                </FooterBtn>
                                <FooterBtn onClick={() => {}}>
                                    Listen to expert opinion
                                </FooterBtn>
                            </div>
                            <AdverseEffect />
                        </section>
                    </div>
                </Layout2>
            </Layout1>
        </>
    );
}
