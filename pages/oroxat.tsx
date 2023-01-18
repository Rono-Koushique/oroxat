import Layout1 from "@/components/layouts/Layout1";
import Layout2 from "@/components/layouts/Layout2";
import Head from "next/head";
import React from "react";
import { Waypoint } from "react-waypoint";
import Oroxat1 from "public/images/page-oroxat/oroxat1.jpeg";
import Oroxat2 from "public/images/page-oroxat/oroxat2.png";
import Image from "next/image";

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
                        </section>
                    </Waypoint>
                </Layout2>
            </Layout1>
        </>
    );
}
