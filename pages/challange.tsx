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
import { Waypoint } from "react-waypoint";

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
    const [activeSection, setActiveSection] = React.useState<string>(
        sectionLinks[0].href.slice(1)
    );
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
            {/* <Waypoint
                onEnter={() => setActiveSection("understanding-anaemia-of-ckd")}
            ></Waypoint> */}
            <Layout1>
                <BreadCrumb pageLinks={pageLinks} />
                <Wall>
                    <Waypoint
                        onEnter={() =>
                            setActiveSection("understanding-anaemia-of-ckd")
                        }
                    />
                    <Frame
                        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-9 gap-x-8 px-8 pt-4 pb-16
                            lg:px-12 lg:pb-20"
                    >
                        <SideNav
                            title="The Challange"
                            sidebarLinks={sectionLinks}
                            activeSection={activeSection}
                        />
                        <Frame className="lg:col-span-6 w-full flex flex-col h-fit gap-y-16">
                            <Waypoint
                                onEnter={() =>
                                    setActiveSection(
                                        "understanding-anaemia-of-ckd"
                                    )
                                }
                                onLeave={() => setActiveSection("")}
                            >
                                <section
                                    id="understanding-anaemia-of-ckd"
                                    className="flex flex-col"
                                >
                                    <h1 className="body-h1">
                                        Understanding anaemia of CKD
                                    </h1>
                                    <p className="body-p">
                                        Anaemia is a common feature of chronic
                                        kidney disease,1 and one of the
                                        hallmarks of advanced CKD.
                                    </p>
                                    <p className="body-p">
                                        The prevalence of anaemia increases as
                                        CKD progresses, from 42.5% at stage 3b
                                        CKD to 83.7% in people with stage 5 CKD.
                                    </p>
                                    <p className="body-p">
                                        Anaemia of CKD was previously attributed
                                        primarily to decreased production of
                                        erythropoietin (EPO).
                                    </p>
                                    <p className="body-p">
                                        It is now known to be caused by a number
                                        of factors, including:
                                    </p>
                                    <br />
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
                                    <br />
                                    <p className="body-p">As CKD progresses:</p>
                                    <ul className="body-ul">
                                        <li>
                                            EPO production decreases, leading to
                                            a reduction in red blood cells and
                                            haemoglobin
                                        </li>
                                        <li>
                                            Hepcidin levels are elevated due to
                                            inflammation and decreased renal
                                            excretion
                                        </li>
                                        <li>
                                            Elevated hepcidin leads to a
                                            reduction in absorption, recycling
                                            and mobilisation of iron
                                        </li>
                                    </ul>
                                    <p className="body-caption text-left">
                                        CKD, chronic kidney disease; EPO,
                                        erythropoietin.
                                    </p>
                                </section>
                            </Waypoint>
                            <Waypoint
                                onEnter={() =>
                                    setActiveSection("treatment-challenges")
                                }
                                onLeave={() => setActiveSection("")}
                            >
                                <section
                                    id="treatment-challenges"
                                    className="flex flex-col"
                                >
                                    <h1 className="body-h1">
                                        Treatment Challanges
                                    </h1>
                                    <h2 className="body-h2">
                                        A specialist&apos;s view
                                    </h2>
                                    <ReviewSlide
                                        imgSrc={ReviewImage1}
                                        title="Professor Anjon Banerjee on kidney diseases"
                                        asSlide={false}
                                    />
                                    <br />
                                    <p className="body-p">
                                        Management of anaemia of CKD can often
                                        be sub-optimal.
                                    </p>
                                    <p className="body-p">
                                        Current treatment of anaemia of CKD is
                                        mainly based on iron supplements and
                                        ESAs (erythropoiesis-stimulating
                                        agents).
                                    </p>
                                    <p className="body-p">
                                        These treatments target individual
                                        factors and not the underlying pathology
                                        of anaemia of CKD.
                                    </p>
                                    <p className="body-p">
                                        When ESA treatment commences, a state of
                                        “functional” iron deficiency may develop
                                        as a result of elevated hepcidin levels
                                        and increased iron demand, blunting the
                                        therapeutic response to ESA.
                                    </p>
                                    <p className="body-caption text-left">
                                        CKD, chronic kidney disease; ESA,
                                        erythropoiesis-stimulating agent.
                                    </p>
                                </section>
                            </Waypoint>
                            <Waypoint
                                onEnter={() =>
                                    setActiveSection(
                                        "the-need-for-an-alternate-treatment-option"
                                    )
                                }
                                onLeave={() => setActiveSection("")}
                            >
                                <section
                                    id="the-need-for-an-alternate-treatment-option"
                                    className="flex flex-col"
                                >
                                    <h1 className="body-h1">
                                        The need for an alternate treatment
                                        option
                                    </h1>
                                    <p className="body-p">
                                        The limitations of current therapies
                                        have highlighted the need for
                                        alternative treatment options.
                                    </p>
                                    <p className="body-p">
                                        Advances in the study of CKD-associated
                                        anaemia have focused on the
                                        pathophysiology of anaemia with the hope
                                        of discovering more targeted and
                                        physiological therapies.
                                    </p>
                                    <p className="body-p">
                                        The discovery of{" "}
                                        <b>hypoxia-inducible factors (HIFs)</b>{" "}
                                        has led to the development of an
                                        alternate category of drugs that
                                        stimulate erythropoiesis by activating
                                        the HIF pathway.
                                    </p>
                                    <FooterBtn
                                        onClick={() =>
                                            console.log("button pressed")
                                        }
                                        className="w-fit"
                                    >
                                        discover the hif pathway
                                    </FooterBtn>
                                    <br />
                                    <p className="body-caption text-left">
                                        CKD, chronic kidney disease; HIF,
                                        hypoxia-inducible factor.
                                    </p>
                                    <br />
                                    <br />
                                    <p className="body-p">
                                        EVZ_2022_0252_UK / August 2022
                                    </p>
                                    <br />
                                    <div className="flex flex-col gap-y-1 px-8 py-6 border border-neutral-700">
                                        <h4 className="text-lg font-semibold text-neutral-700">
                                            Reporting Adverse Events
                                        </h4>
                                        <p className="text-neutral-500">
                                            Adverse events should be reported.
                                            Reporting forms and information can
                                            be found at{" "}
                                            <span className="underline text-fuchsia-700">
                                                www.mhra.gov.uk/yellowcard
                                            </span>
                                            &nbsp; or search for MHRA Yellow
                                            Card in the Google Play or Apple App
                                            Store. Adverse events should also be
                                            reported to SKF Pharma Ltd. on 0800
                                            783 5018
                                        </p>
                                    </div>
                                </section>
                            </Waypoint>
                        </Frame>
                    </Frame>
                </Wall>
            </Layout1>
        </>
    );
}
