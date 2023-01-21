import React from "react";
import Head from "next/head";
import Image from "next/image";
import Layout1 from "@/components/layouts/Layout1";
import Layout2 from "@/components/layouts/Layout2";
import Perspect1 from "public/images/page-perspect/perspect1.png";
import Perspect2 from "public/images/page-perspect/perspect2.jpg";
import Perspect3 from "public/images/page-perspect/perspect3.jpg";
import Perspect4 from "public/images/page-perspect/perspect4.jpg";
import Perspect5 from "public/images/page-perspect/perspect5.jpg";
import Perspect6 from "public/images/page-perspect/perspect6.jpg";
import Perspect7 from "public/images/page-perspect/perspect7.jpg";
import Perspect8 from "public/images/page-perspect/perspect8.jpg";
import Perspect9 from "public/images/page-perspect/perspect9.jpg";
import ReviewSlide from "@/components/slides/ReviewSlide";
import Size from "@/components/extras/Size";
import Benifit from "@/components/cards/Benifit";
import FooterBtn from "@/components/buttons/FooterBtn";
import AdverseEffect from "@/components/sections/AdverseEffect";

const pageLinks = [
    {
        title: "home",
        href: "/",
    },
    {
        title: "patient perspective",
        href: "/patient-perspective",
    },
];

const sectionLinks = [
    {
        title: "The burden on patients",
        href: "#the-burden-on-patients",
    },
    {
        title: "Patient benefits of EVRENZO",
        href: "#patient-benefits-of-evrenzo",
    },
    {
        title: "Which of your patients may benefit most?",
        href: "#which-of-your-patients-may-benefit-most",
    },
];

type Props = {};

export default function PatientPerspective({}: Props) {
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
                    sidebarTitle="The patient perspective"
                    currentSection={currentSection}
                >
                    <div className="content flex flex-col gap-8">
                        <section id="the-burden-on-patients">
                            <h1>The burden on patients</h1>
                            <h3>
                                Anaemia of CKD has a substantial impact on
                                patients&apos; lives
                            </h3>
                            <p>
                                It is associated with poor clinical outcomes and
                                reduced quality of life.
                            </p>
                            <Image className="image" src={Perspect1} alt="" />
                            <p>
                                Symptoms of anaemia overlap with those of CKD1
                                and may add to the burden of CKD.
                            </p>
                            <p>
                                Untreated anaemia may accelerate progression of
                                CKD.
                            </p>
                            <h3>
                                Current management of CKD is often sub-optimal
                            </h3>
                            <p>
                                Concern about the risks of over-correcting
                                haemoglobin may lead to under-treatment of
                                patients.
                            </p>
                            <p>How does it feel to live with anaemia of CKD?</p>
                            <div className="holder">
                                <ReviewSlide
                                    className="slide"
                                    imgSrc={Perspect2}
                                    asSlide={false}
                                />
                                <h4>
                                    What do your patients expect from their
                                    treatment?
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <Image
                                        className="h-60 lg:h-32 object-cover"
                                        src={Perspect3}
                                        alt=""
                                    />
                                    <Image
                                        className="h-60 lg:h-32 object-cover"
                                        src={Perspect4}
                                        alt=""
                                    />
                                    <Image
                                        className="h-60 lg:h-32 object-cover"
                                        src={Perspect5}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <p>
                                Effective control of symptoms?
                                <br />
                                Improved quality of life?
                                <br />
                                Reduced impact on daily routine?
                                <br />
                                Simple administration?
                                <br />
                                Favourable tolerability?
                                <br />
                                Reassurance about risks of treatment?
                                <br />
                                CKD, chronic kidney disease; GI,
                                <br />
                                gastrointestinal; Hb, haemoglobin.
                                <br />
                            </p>
                            <p className="fade">
                                CKD, chronic kidney disease; GI,
                                gastrointestinal; Hb, haemoglobin.
                            </p>
                        </section>
                        <section id="patient-benefits-of-evrenzo">
                            <h1>Patient benefits of EVRENZO</h1>
                            <h3>
                                EVRENZO helps suitable patients achieve and
                                maintain Hb targets
                            </h3>
                            <p className="italic">
                                On top of their anaemia. At home with their
                                treatment.
                            </p>
                            <div className="holder flex flex-col gap-2">
                                <Benifit imgSrc={Perspect6}>
                                    <p className="font-bold !text-white">
                                        Oral treatment that can be taken at home
                                    </p>
                                    <ul className="!text-white !my-0">
                                        <li>no special storage conditions</li>
                                        <li>
                                            oral treatment does not require
                                            hospital visits for administration
                                        </li>
                                    </ul>
                                </Benifit>
                                <Benifit imgSrc={Perspect7}>
                                    <p className="font-bold !text-white">
                                        Three times per week dosage, on
                                        non-consecutive days
                                    </p>
                                </Benifit>
                                <Benifit imgSrc={Perspect8}>
                                    <p className="font-bold !text-white">
                                        Reduced use of IV iron compared with ESA
                                    </p>
                                </Benifit>
                            </div>
                            <p className="fade">
                                CKD, chronic kidney disease; DD,
                                dialysis-dependent; ESA,
                                erythropoiesis-stimulating agent; IV,
                                intravenous; NDD, non-dialysis-dependent.
                            </p>
                        </section>
                        <section id="which-of-your-patients-may-benefit-most">
                            <h1>Which of your patients may benefit most?</h1>
                            <h3>Non Dialysis Patients</h3>
                            <ul>
                                <li>Routine oral iron</li>
                                <li>Iron replete</li>
                                <li>Hb below target</li>
                                <li>Poor adherence to oral iron</li>
                            </ul>
                            <h3>Just Started Dialysis</h3>
                            <ul>
                                <li>Routine iron</li>
                                <li>Iron replete</li>
                                <li>Hb below target</li>
                            </ul>
                            <div className="flex flex-col gap-y-1 px-8 py-6 border border-neutral-700 holder">
                                <p className="!mb-0">
                                    EVRENZO is an oral tablet that provides Hb
                                    correction and maintenance comparable to
                                    ESA, with reduced use of IV iron
                                </p>
                            </div>
                            <h3>
                                How can your patients get more out of EVRENZO?
                            </h3>
                            <p>
                                The leaflet below provide educational materials
                                and simple advice to support patients during
                                their treatment journey.
                            </p>
                            <div className="holder w-60">
                                <Image src={Perspect9} alt="" />
                                <h4 className="!text-fuchsia-700">
                                    What you need to know about anaemia of CKD
                                </h4>
                                <p>
                                    Important information for patients and
                                    carers
                                </p>
                                <FooterBtn
                                    className="w-full !py-4"
                                    onClick={() => {}}
                                >
                                    download
                                </FooterBtn>
                            </div>
                            <p className="fade">
                                DD, dialysis-dependent; ESA,
                                erythropoiesis-stimulating agent; Hb,
                                haemoglobin; IV, intravenous; TIW, three times
                                weekly.
                            </p>
                            <AdverseEffect />
                        </section>
                    </div>
                </Layout2>
            </Layout1>
            <Size />
        </>
    );
}
