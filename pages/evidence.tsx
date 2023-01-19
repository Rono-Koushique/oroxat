import React from "react";
import Head from "next/head";
import Layout1 from "@/components/layouts/Layout1";
import Wall from "@/components/containers/Wall";
import Frame from "@/components/containers/Frame";
import BreadCrumb from "@/components/extras/BreadCrumb";
import Evidence1 from "public/images/page-evidence/evidence1.jpeg";
import Image from "next/image";
import Ndd1 from "public/images/page-evidence/ndd1.jpg";
import Ndd2 from "public/images/page-evidence/ndd2.jpg";
import Ndd3 from "public/images/page-evidence/ndd3.jpg";
import Ndd4 from "public/images/page-evidence/ndd4.jpg";
import Ndd5 from "public/images/page-evidence/ndd5.jpg";
import GridCard1 from "@/components/cards/GridCard1";
import AdverseEffect from "@/components/sections/AdverseEffect";

const nddInfo = [
    {
        src: Ndd1,
        text: "Oroxat helps to react targeted hemoglobin levels",
    },
    {
        src: Ndd2,
        text: "Oroxat maintains stable dose for hemoglobin",
    },
    {
        src: Ndd3,
        text: "Oroxat's Hb results similar to ESA",
    },
    {
        src: Ndd4,
        text: "Oroxat reduces need for IV iron in dialysis patients",
    },
    {
        src: Ndd5,
        text: "Oroxat SUMMARY OF EFFICACY IN NDD",
    },
];

const ddInfo = [
    {
        src: Ndd1,
        text: "OROXAT maintains HB levels similar to ESA in new dialysis patients",
    },
    {
        src: Ndd4,
        text: "Oroxat reduces IV iron infusions in dialysis patients",
    },
    {
        src: Ndd5,
        text: "Oroxat SUMMARY OF EFFICACY IN DD",
    },
];

const pageLinks = [
    {
        title: "home",
        href: "/",
    },
    {
        title: "see the evidence",
        href: "/evidence",
    },
];

type Props = {};

export default function evidence({}: Props) {
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
                <BreadCrumb pageLinks={pageLinks} />
                <div className="content">
                    <section id="result" className="mt-6">
                        <Wall>
                            <Frame className="max-w-6xl mx-auto flex flex-col px-8 lg:px-12">
                                <h1>
                                    The OROXAT &quot;ALPINE&quot; clinical
                                    efficacy and safety programme
                                </h1>
                                <p>
                                    A comprehensive range of Phase III clinical
                                    trials involving 9,600 patients
                                </p>
                                <p>
                                    Included patients with
                                    non-dialysis-dependent, incident
                                    dialysis-dependent, and stable
                                    dialysis-dependent CKD.
                                </p>
                                <Image
                                    className="image"
                                    src={Evidence1}
                                    alt=""
                                />
                                <div className="holder">
                                    <p className="caption">
                                        Ast=Astellas trial
                                    </p>
                                    <p className="caption">
                                        AZ=AstraZeneca trial
                                    </p>
                                    <p className="caption">
                                        Fib=Fibrogen trial
                                    </p>
                                    <p className="caption">
                                        *Darbepoetin-alfa active comparator
                                    </p>
                                    <p className="caption">
                                        **Subset of patients with ≥2 weeks and
                                        ≤4 months of dialysis at the time of
                                        randomisation
                                    </p>
                                    <p className="caption">
                                        †Epoetin-alfa active comparator
                                    </p>
                                    <p className="caption">
                                        ††Subset of patients with &gt;4 months
                                        of dialysis at the time of randomisation
                                    </p>
                                    <p className="caption">
                                        ‡Darbepoetin-alfa or epoetin-alfa active
                                        comparator
                                    </p>
                                </div>
                                <p className="fade">
                                    CKD, chronic kidney disease; DD,
                                    dialysis-dependent; ESA,
                                    erythropoiesis-stimulating agent; Hb,
                                    haemoglobin; IV, intravenous; NDD,
                                    non-dialysis-dependent.
                                </p>
                            </Frame>
                        </Wall>
                    </section>
                    <section id="result" className="mt-6">
                        <Wall className="bg-gray-700">
                            <Frame
                                className="max-w-6xl mx-auto flex flex-col px-8 py-16 
                                        lg:px-12 lg:py-20"
                            >
                                <div>
                                    <h1 className="!text-gray-100 w-full md:w-1/2">
                                        Non-dialysis-dependent CKD
                                    </h1>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 holder">
                                    {nddInfo.map((info) => {
                                        return (
                                            <GridCard1
                                                key={info.text}
                                                src={info.src}
                                                text={info.text}
                                                textClassName="bg-white !text-lg !text-gray-700"
                                            />
                                        );
                                    })}
                                </div>
                            </Frame>
                        </Wall>
                        <Wall>
                            <Frame
                                className="max-w-6xl mx-auto flex flex-col px-8 pt-16 
                                        lg:px-12 lg:pt-20"
                            >
                                <div>
                                    <h1 className="w-full md:w-1/2">
                                        Dialysis-dependent CKD
                                    </h1>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 holder">
                                    {ddInfo.map((info) => {
                                        return (
                                            <GridCard1
                                                key={info.text}
                                                src={info.src}
                                                text={info.text}
                                                cardClassName="shadow-xl"
                                                textClassName="bg-white !text-lg !text-gray-700"
                                            />
                                        );
                                    })}
                                </div>
                            </Frame>
                        </Wall>
                        <Wall>
                            <Frame
                                className="max-w-6xl mx-auto flex flex-col px-8 py-12
                                        lg:px-12 lg:py-16"
                            >
                                <AdverseEffect />
                            </Frame>
                        </Wall>
                    </section>
                </div>
            </Layout1>
        </>
    );
}
