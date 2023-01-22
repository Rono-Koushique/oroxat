import React from "react";
import Head from "next/head";
import Layout1 from "@/components/layouts/Layout1";
import BreadCrumb from "@/components/extras/BreadCrumb";
import Wall from "@/components/containers/Wall";
import Frame from "@/components/containers/Frame";
import Expert1 from "public/images/page-expert/expert1.jpg";
import Expert2 from "public/images/page-expert/expert2.png";
import ReviewSlide from "@/components/slides/ReviewSlide";
import AdverseEffect from "@/components/sections/AdverseEffect";

const pageLinks = [
    {
        title: "home",
        href: "/",
    },
    {
        title: "expert viewpoint",
        href: "/viewpoint",
    },
];

type Props = {};

export default function viewpoint({}: Props) {
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
                    <Wall>
                        <Frame className="max-w-6xl mx-auto flex flex-col px-8 lg:px-12 py-6 lg:py-8">
                            <h1>
                                View from the top: expert opinion from leading
                                specialists
                            </h1>
                            <p>
                                The approach to managing anaemia of CKD is
                                changing rapidly, thanks in part to the
                                introduction of a new treatment category, HIF-PH
                                inhibitors. Here we share opinion from experts
                                in the field.
                            </p>
                            <div className="holder flex flex-col gap-8">
                                <ReviewSlide
                                    imgSrc={Expert1}
                                    title="Professor Mishio Xao on the challenges of managing anaemia of CKD"
                                    asSlide={false}
                                />
                                <ReviewSlide
                                    imgSrc={Expert2}
                                    title="Professor Mishio Xao on the challenges of managing anaemia of CKD"
                                    asSlide={false}
                                />
                            </div>
                            <p className="fade">
                                CKD, chronic kidney disease; HIF-PH,
                                hypoxia-inducible factor prolyl-hydroxylase.
                            </p>
                            <div className="flex flex-col pt-6 pb-12 lg:pt-8 lg:pb-16">
                                <AdverseEffect />
                            </div>
                        </Frame>
                    </Wall>
                </div>
            </Layout1>
        </>
    );
}
