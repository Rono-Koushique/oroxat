import Layout1 from "@/components/layouts/Layout1";
import Layout2 from "@/components/layouts/Layout2";
import Head from "next/head";
import React from "react";
import { Waypoint } from "react-waypoint";
import Oroxat1 from "public/images/page-oroxat/oroxat1.jpeg";
import Oroxat2 from "public/images/page-oroxat/oroxat2.png";
import Oroxat3 from "public/images/page-oroxat/oroxat3.png";
import Oroxat4 from "public/images/page-oroxat/oroxat4.jpeg";
import Oroxat5 from "public/images/page-oroxat/oroxat5.jpg";
import Oroxat6 from "public/images/page-oroxat/oroxat6.jpeg";
import Image from "next/image";
import ReviewSlide from "@/components/slides/ReviewSlide";
import FooterBtn from "@/components/buttons/FooterBtn";

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
    const [activeSection, setActiveSection] = React.useState<string>(
        sectionLinks[0].href.slice(1)
    );
    console.log(activeSection);

    return (
        <>
            <Head>
                <title>Oroxat</title>
                <meta
                    name="description"
                    content="Oroxat is a medicine produced by SKF. It is used to treat a variety of conditions and is available by prescription only."
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
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                >
                    <Waypoint
                        onEnter={() => setActiveSection("#the-hif-pathway")}
                        onLeave={() => setActiveSection("")}
                    >
                        <section id="the-hif-pathway" className="flex flex-col">
                            <h1 className="body-h1">The HIF pathway</h1>
                            <h2 className="body-h2">
                                The HIF (hypoxia-inducible factor) pathway plays
                                a central role in erythropoiesis.
                            </h2>
                            <p className="body-p">
                                It is the physiological mechanism by which the
                                body responds to low oxygen conditions, such as
                                those experienced at high altitude.
                            </p>
                            <p className="body-p">
                                The HIF pathway affects all the key components
                                of eythropoiesis:
                            </p>
                            <ul className="body-ul">
                                <li>
                                    Increases erythropoietin (EPO) production
                                </li>
                                <li>Suppresses hepcidin production</li>
                                <li>
                                    Increases iron absorption, transport and
                                    mobilisation
                                </li>
                            </ul>
                            <br />
                            <h2 className="body-h2">
                                The HIF pathway is critically important to
                                oxygen sensing
                            </h2>
                            <p className="body-p">
                                In normoxic conditions, the HIF pathway is not
                                activated and the HIF-α subunit is rapidly
                                degraded via HIF prolyl-hydroxylase (HIF-PH):
                            </p>
                            <Image className="body-img" src={Oroxat1} alt="" />
                            <p className="body-p">
                                In hypoxic conditions, the HIF pathway is
                                activated: the HIF-α subunit is not degraded,
                                allowing dimerisation with the HIF-ß subunit and
                                so inducing the transcription and translation of
                                target hypoxia response genes involved in
                                erythropoiesis, including:
                            </p>
                            <Image className="body-img" src={Oroxat2} alt="" />
                            <p className="body-p">
                                In CKD, oxygen sensing via HIF is impaired, and
                                this contributes to the development of anaemia.
                            </p>
                            <p className="body-p">
                                But inhibiting the breakdown of HIF offers the
                                opportunity to override the effect of CKD on
                                oxygen sensing as well stimulating the
                                production of erythropoetic genes and their
                                associated proteins.
                            </p>
                            <p className="body-caption text-left">
                                CKD, chronic kidney disease; HIF,
                                hypoxia-inducible factor; HIF-PH,
                                hypoxia-inducible factor prolyl-hydroxylase;
                                EPO, erythropoietin.
                            </p>
                        </section>
                    </Waypoint>
                    <Waypoint
                        onEnter={() =>
                            setActiveSection(
                                "oroxat-a-first-in-class-treatment"
                            )
                        }
                        onLeave={() => setActiveSection("")}
                    >
                        <section id="oroxat-a-first-in-class-treatment">
                            <h1 className="body-h1">
                                OROXAT: a first-in-class treatment
                            </h1>
                            <p className="body-p">
                                OROXAT is a HIF-PH inhibitor, a class of drug
                                with a novel mechanism of action.
                            </p>
                            <br />
                            <h2 className="body-h2">
                                OROXAT mimics the body&apos;s natural response
                                to hypoxia by activating the HIF pathway
                            </h2>
                            <Image className="body-img" src={Oroxat3} alt="" />
                            <p className="body-p">
                                OROXAT inhibits HIF-PH, thus preventing
                                breakdown of HIF-α and activating the HIF
                                pathway
                            </p>
                            <p className="body-p">
                                This induces transcription and translation of
                                genes involved in erythropoiesis
                            </p>
                            <p className="body-p">
                                HIF-PH inhibitors induce activation of the genes
                                responsible for erythropoiesis, but do so in the
                                presence of normal oxygen tension.
                            </p>
                            <br />
                            <h2 className="body-h2">
                                OROXAT reduces hepcidin levels and improves iron
                                bioavailability
                            </h2>
                            <p className="body-p">
                                Through the inhibition of HIF-PH, OROXAT
                                stimulates a coordinated erythropoietic response
                                that not only{" "}
                                <b>increases erythropoietin (EPO)</b> levels,
                                but also <b>increases iron mobilisation</b>, as
                                well as helping to overcome the effects of
                                inflammation by <b>suppressing hepcidin</b>.
                            </p>
                            <Image className="body-img" src={Oroxat4} alt="" />
                            <p className="body-p">See how OROXAT works:</p>
                            <ReviewSlide
                                className="body-img"
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
                    </Waypoint>
                    <Waypoint
                        onEnter={() =>
                            setActiveSection(
                                "oroxat-promotes-a-coordinated-erythropoietic-response"
                            )
                        }
                        onLeave={() => setActiveSection("")}
                    >
                        <section id="oroxat-promotes-a-coordinated-erythropoietic-response">
                            <h1 className="body-h1">
                                OROXAT promotes a coordinated erythropoietic
                                response
                            </h1>
                            <p className="body-p">
                                By inhibiting HIF-PH, OROXAT stimulates a
                                coordinated erythropoietic response that:
                            </p>
                            <Image className="body-img" src={Oroxat6} alt="" />
                            <p className="body-caption text-left">
                                Hb, haemoglobin; HIF-PH, hypoxia-inducible
                                factor prolyl-hydroxylase; RBC, red blood cell.
                            </p>
                        </section>
                    </Waypoint>
                    <Waypoint
                        onEnter={() =>
                            setActiveSection(
                                "the-place-of-oroxat-in-management-of-anaemia-of-ckd"
                            )
                        }
                        onLeave={() => setActiveSection("")}
                    >
                        <section id="#the-place-of-oroxat-in-management-of-anaemia-of-ckd">
                            <h1 className="body-h1">
                                The place of OROXAT in management of anaemia of
                                CKD
                            </h1>
                            <h2 className="body-h2">
                                OROXAT has the potential to change the clinical
                                management of anaemia of CKD.
                            </h2>
                            <p className="body-p">
                                Instead of treating the conditon as a deficiency
                                of EPO or iron, EVRENZO addresses multiple
                                factors that contribute to anaemia.
                            </p>
                            <p className="body-p">
                                Targeting the HIF pathway with HIF-PHIs may
                                offer an advance in clinical practice by
                                providing a more comprehensive and physiological
                                approach to the management of anaemia of CKD
                                than existing treatments.
                            </p>
                            <p className="body-p">
                                OROXAT helps patients with anaemia of CKD:
                            </p>
                            <ul className="body-ul">
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
                            <p className="body-p">
                                OROXAT (roxadustat) is indicated for treatment
                                of adult patients with symptomatic anaemia
                                associated with chronic kidney disease (CKD)
                            </p>
                            <p className="body-caption text-left">
                                CKD, chronic kidney disease; EPO,
                                erythropoietin; ESA, erythropoiesis-stimulating
                                agent; HIF, hypoxia-inducible factor; HIF-PHI,
                                hypoxia-inducible factor prolyl-hydroxylase
                                inhibitor; IV, intravenous; TIW, three times
                                weekly.
                            </p>
                        </section>
                    </Waypoint>
                    <Waypoint
                        onEnter={() => setActiveSection("why-oroxat")}
                        onLeave={() => setActiveSection("")}
                    >
                        <section id="why-oroxat">
                            <h1 className="body-h1">Why EVRENZO?</h1>
                            <h2 className="body-h2">
                                EVRENZO, a first-in-class treatment for adult
                                patients with symptomatic anaemia associated
                                with CKD, is like a breath of fresh air, at high
                                altitude
                            </h2>
                            <h3 className="body-h3">Innovation</h3>
                            <ul className="body-ul">
                                <li>
                                    EVRENZO&apos;s MoA leads to a coordinated
                                    erythropoietic response ultimately resulting
                                    in increased haemoglobin production
                                </li>
                                <li>
                                    EVRENZO can help adult patients with
                                    symptomatic anaemia associated with CKD
                                    achieve and maintain their recommended Hb
                                    levels. In clinical studies, less IV iron
                                    was used in patients taking EVRENZO compared
                                    to ESAs
                                </li>
                            </ul>
                            <h3 className="body-h3">Confidence</h3>
                            <ul className="body-ul">
                                <li>
                                    The general safety profile of EVRENZO was
                                    overall comparable to ESAs for the majority
                                    of safety variables evaluated and is
                                    reflective of the studied CKD populations
                                </li>
                            </ul>
                            <h3 className="body-h3">Convenience</h3>
                            <ul className="body-ul">
                                <li>
                                    Oral administration with a three times
                                    weekly tablet, on non-consecutive days
                                </li>
                            </ul>
                            <p className="body-p">
                                *Please see EVRENZO SmPC for full safety profile
                                and further information on CV and mortality
                                risk.
                            </p>
                            <div className="w-[20rem] flex flex-col gap-2">
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
                            <div className="flex flex-col gap-y-1 mt-8 px-8 py-6 border border-neutral-700">
                                <h4 className="text-lg font-semibold text-neutral-700">
                                    Reporting Adverse Events
                                </h4>
                                <p className="text-neutral-500">
                                    Adverse events should be reported. Reporting
                                    forms and information can be found at{" "}
                                    <span className="underline text-fuchsia-700">
                                        www.mhra.gov.uk/yellowcard
                                    </span>
                                    &nbsp; or search for MHRA Yellow Card in the
                                    Google Play or Apple App Store. Adverse
                                    events should also be reported to SKF Pharma
                                    Ltd. on 0800 783 5018
                                </p>
                            </div>
                        </section>
                    </Waypoint>
                </Layout2>
            </Layout1>
        </>
    );
}
