import React from "react";
import Head from "next/head";
import Layout1 from "@/components/layouts/Layout1";
import Layout2 from "@/components/layouts/Layout2";
import AdverseEffect from "@/components/sections/AdverseEffect";
import Image from "next/image";
import Use1 from "public/images/page-use/use_1.jpeg";
import Use2 from "public/images/page-use/use_2.png";
import Use3 from "public/images/page-use/use_3.png";
import Use4 from "public/images/page-use/use_4.jpg";
import Use5 from "public/images/page-use/use_5.jpg";
import Layout3 from "@/components/layouts/Layout3";
import LinkBtn from "@/components/buttons/LinkBtn";

const pageLinks = [
    {
        title: "home",
        href: "/",
    },
    {
        title: "how to use oroxat",
        href: "/how-to-use-oroxat",
    },
];

const sectionLinks = [
    {
        title: "Oral treatment with TIW dosage",
        href: "#oral-treatment-with-tiw-dosage",
    },
    {
        title: "Flexible starting dose regimen",
        href: "#flexible-starting-dose-regimen",
    },
    {
        title: "Starting patients on OROXAT",
        href: "#starting-patients-on-oroxat",
    },
];

type Props = {};

export default function HowToUseOroxat({}: Props) {
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
                    sidebarTitle="How to use OROXAT"
                    currentSection={currentSection}
                >
                    <Layout3 className="content">
                        <section
                            id="oral-treatment-with-tiw-dosage"
                            className="flex flex-col"
                        >
                            <h1 className="!mb-0">
                                OROXAT offers the convenience of oral
                                administration1 with a three times per week
                                tablet on non-consecutive days
                            </h1>
                            <div className="holder">
                                <Image src={Use1} alt="" />
                            </div>
                            <h3 className="!mb-0">
                                The convenience of oral administration1
                            </h3>
                            <div className="holder">
                                <Image src={Use2} alt="" />
                            </div>
                            <ul>
                                <li>
                                    Oral treatment - does not have to be
                                    administered in hospital
                                </li>
                                <li>
                                    No special storage conditions - avoiding the
                                    need for cold-chain storage
                                </li>
                            </ul>
                            <h4>
                                Taken three times per week, on non-consecutive
                                days
                            </h4>
                            <p className="fade">
                                Patients can start on the day that suits them
                            </p>
                            <h3 className="!mb-0">EXAMPLE SCHEDULE</h3>
                            <div className="holder">
                                <Image src={Use3} alt="" />
                            </div>
                            <p>
                                OROXAT film-coated tablets are to be taken
                                orally with or without food. Tablets are to be
                                swallowed whole and not chewed, broken or
                                crushed
                            </p>
                            <ul>
                                <li>
                                    The tablets should be taken at least 1 hour
                                    after administration of phosphate binders
                                    (except lanthanum) or other medicinal
                                    products containing multivalent cations such
                                    as calcium, iron, magnesium or aluminium
                                </li>
                                <li>
                                    OROXAT does not require any special storage
                                    conditions
                                </li>
                            </ul>
                            <p>
                                For further information on administration and
                                dosing relating to OROXAT, please refer to the
                                SmPC.
                            </p>
                            <h3>Reduced use of IV iron compared to ESA</h3>
                            <ul>
                                <li>
                                    Less IV iron was used in patients taking
                                    OROXAT compared to ESAs
                                </li>
                            </ul>
                            <h4 className="!mb-0">
                                <i>
                                    Dosage instructions and reminders are
                                    available in our digital patient leaflet,
                                    which you can find in our patient benefits
                                    section (click below)
                                </i>
                            </h4>
                            <div className="holder">
                                <LinkBtn
                                    href="/patient-perspective#which-of-your-patients-will-benefit-most"
                                    className="w-fit"
                                >
                                    SEE PATIENTS BENIFITS SECTION MATERIALS
                                </LinkBtn>
                            </div>
                            <p className="fade">
                                IV, intravenous; TIW, three times weekly..
                            </p>
                        </section>
                        <section
                            id="flexible-starting-dose-regimen"
                            className="flex flex-col"
                        >
                            <h1>
                                OROXAT offers an individualised starting dose
                                regimen for adult patients with symptomatic
                                anaemia associated with CKD
                            </h1>
                            <h3>ESA-naive patients</h3>
                            <div className="holder">
                                <table className="w-full">
                                    <thead className="text-left">
                                        <tr>
                                            <th>Body weight</th>
                                            <th>OROXAT dosage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>&lt;100 kg</td>
                                            <td>70 mg, 3x per week</td>
                                        </tr>
                                        <tr>
                                            <td>≥100 kg</td>
                                            <td>100 mg, 3x per week</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h3>Patients converting from ESA treatment</h3>
                            <ul>
                                <li>
                                    Patients currently treated with an ESA can
                                    be converted to OROXAT. Conversion of
                                    dialysis patients otherwise stable on ESA
                                    treatment is only to be considered when
                                    there is a valid clinical reason
                                </li>
                                <li>
                                    Conversion of non-dialysis patients
                                    otherwise stable on ESA treatment has not
                                    been investigated and should be based on a
                                    benefitrisk consideration for the individual
                                    patient.
                                </li>
                                <li>
                                    The recommended starting dose of OROXAT is
                                    based on the average prescribed ESA dose in
                                    the 4 weeks before conversion The first
                                    OROXAT dose should replace the next
                                    scheduled dose of the current ESA.
                                </li>
                            </ul>
                            <div className="holder">
                                <table>
                                    <thead className="text-left">
                                        <tr>
                                            <th>
                                                Darbepoetin-alfa IV or SC dose
                                                (micrograms/week)
                                            </th>
                                            <th>
                                                Epoetin IV or SC dose (IU/week)
                                            </th>
                                            <th>
                                                Methoxy polyethylene
                                                glycol-epoetin beta IV or SC
                                                dose (micrograms/monthly)
                                            </th>
                                            <th>
                                                OROXAT dose (milligrams three
                                                times per week)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Less than 25</td>
                                            <td>Less than 5,000</td>
                                            <td>Less than 80</td>
                                            <td>70</td>
                                        </tr>
                                        <tr>
                                            <td>25 to less than 40</td>
                                            <td>5,000 up to 8,000</td>
                                            <td>80 up to and including 120</td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <td>40 up to and including 80</td>
                                            <td>
                                                More than 8,000 up to and
                                                including 16,000
                                            </td>
                                            <td>
                                                More than 120 up to and
                                                including 200
                                            </td>
                                            <td>150</td>
                                        </tr>
                                        <tr>
                                            <td>More than 80</td>
                                            <td>More than 16,000</td>
                                            <td>More than 200</td>
                                            <td>200</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h3>
                                Initial Hb monitoring requirements for OROXAT
                                are similar to other treatments for adult
                                patients with symptomatic anaemia associated
                                with CKD
                            </h3>
                            <ul>
                                <li>
                                    Hb levels should be monitored every 2 weeks
                                    until the desired Hb level of 10-12 g/dL is
                                    achieved and stabilised, and every 4 weeks
                                    thereafter, or as clinically indicated
                                </li>
                            </ul>
                            <p className="fade">
                                CKD, chronic kidney disease; ESA,
                                erythropoiesis-stimulating agent; Hb,
                                haemoglobin; IU, international units; IV,
                                intravenous; SC, subcutaneous.
                            </p>
                        </section>
                        <section
                            id="starting-patients-on-oroxat"
                            className="flex flex-col"
                        >
                            <h1>Starting patients on OROXAT</h1>
                            <h3>Which patients will you consider first?</h3>
                            <div className="flex flex-row gap-6 holder">
                                <div className="flex flex-col gap-y-0">
                                    <p>Patients not on dialysis?</p>
                                    <div className="holder">
                                        <Image src={Use4} alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-0">
                                    <p>Patients new to dialysis?</p>
                                    <div className="holder">
                                        <Image src={Use5} alt="" />
                                    </div>
                                </div>
                            </div>
                            <p>How to start patients on OROXAT:</p>
                            <p>
                                Treatment with OROXAT should be initiated by a
                                physician experienced in the management of
                                anaemia. All other causes of anaemia should be
                                evaluated prior to initiating therapy with
                                OROXAT and when deciding to increase the dose.
                            </p>
                            <p>
                                In addition to the presence of symptoms of
                                anaemia, other clinical criteria should be
                                considered in the evaluation of the individual
                                patient&apos;s clinical course and condition.
                            </p>
                            <p>Administration – key points</p>
                            <ul>
                                <li>
                                    Adequate iron stores should be ensured prior
                                    to initiating treatment
                                </li>
                                <li>
                                    The appropriate dose of OROXAT must be taken
                                    orally three times a week and not on
                                    consecutive days
                                </li>
                                <li>
                                    The dose should be individualised to achieve
                                    and maintain target Hb levels of 10 to 12
                                    g/dL
                                </li>
                                <li>
                                    OROXAT treatment should not be continued
                                    beyond 24 weeks of therapy if a clinically
                                    meaningful increase in Hb levels is not
                                    achieved. Alternative explanations for an
                                    inadequate response should be sought and
                                    addressed before re-starting OROXAT
                                </li>
                            </ul>
                            <div className="holder">
                                <LinkBtn
                                    href="/patient-perspective#the-burden-on-patients"
                                    className="w-fit"
                                >
                                    DISCOVER THE BENIFITS OF OROXATS TO PATIENTS
                                </LinkBtn>
                            </div>
                            <p className="fade">
                                ESA, erythropoiesis-stimulating agent; Hb,
                                haemoglobin.
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
