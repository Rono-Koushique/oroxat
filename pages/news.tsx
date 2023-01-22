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
    title: "news & events",
    href: "/news",
},
];

type Props = {};

export default function News({}: Props) {
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
                            <h1>What's on the Horizon?</h1>
                            <p>
                                If you are interested in keeping up to date
                                with our latest live and on demand webinars,
                                please click on the link below to go and
                                register for our webinar site.
                            </p>
                            <p>
                                Our webinars will typically be discussing
                                the latest topics in relation to anaemia of
                                chronic kidney disease and include a variety
                                of highly regarded speakers from the medical
                                and scientific community
                            </p>
                            <p>
                                Click here to register for our webinar series https://webapp.spotme.com/welcome/evrenzoukwebinars
                            </p>
                        </Frame>
                    </Wall>
                </section>
                <section id="result" className="mt-6">
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
