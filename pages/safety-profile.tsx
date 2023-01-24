import React from "react";
import Head from "next/head";
import Layout1 from "@/components/layouts/Layout1";
import Layout2 from "@/components/layouts/Layout2";
import AdverseEffect from "@/components/sections/AdverseEffect";
import FooterBtn from "@/components/buttons/FooterBtn";
import Image from "next/image";
import Safety1 from "public/images/page-safety/safety1.png";
import Safety2 from "public/images/page-safety/safety2.png";

const pageLinks = [
    {
        title: "home",
        href: "/",
    },
    {
        title: "cv risk and safety profile",
        href: "/safety-profile",
    },
];

const sectionLinks = [
    {
        title: "The safety profile of OROXAT has been evaluated in an extensive range of clinical studies",
        href: "#the-safety-profile-of-oroxat-has-been-evaluated-in-an-extensive-range-of-clinical-studies",
    },
    {
        title: "Contraindications, special warnings and precautions for use",
        href: "#contraindications-special-warnings-and-precautions-for-use",
    },
    {
        title: "The cardiovascular safety of OROXAT was assessed in a meta-analysis of adjudicated major adverse cardiovascular events",
        href: "#the-cardiovascular-safety-of-oroxat-was-assessed-in-a-meta-analysis-of-adjudicated-major-adverse-cardiovascular-events",
    },
    {
        title: "No increase in CV or mortality risk with OROXAT compared with ESA in patients with NDD- and IDD-CKD (OT)",
        href: "#no-increase-in-cv-or-mortality-risk-with-oroxat-compared-with-esa-in-patients-with-ndd-and-idd-ckd-ot",
    },
    {
        title: "Initial Hb monitoring requirements for OROXAT are similar to other treatments for symptomatic anaemia associated with CKD",
        href: "#initial-hb-monitoring-requirements-for-oroxat-are-similar-to-other-treatments-for-symptomatic-anaemia-associated-with-ckd",
    },
];

type Props = {};

export default function SafetyProfile({}: Props) {
    const [currentSection, setCurrentSection] = React.useState<string>(
        sectionLinks[0].href.slice(1)
    );

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            sectionLinks.forEach((section) => {
                const element = document.getElementById(section.href.slice(1));
                const elementPosition = element?.offsetTop;
                
                if (elementPosition && scrollPosition+100 >= elementPosition) {
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
                    sidebarTitle="CV safety and general safety profile"
                    currentSection={currentSection}
                >
                    <div className="content flex flex-col gap-8">
                        <section
                            id="the-safety-profile-of-oroxat-has-been-evaluated-in-an-extensive-range-of-clinical-studies"
                            className="flex flex-col"
                        >
                            <h1>
                                The safety profile of OROXAT has been evaluated
                                in an extensive range of clinical studies
                            </h1>
                            <p>
                                Over 6,800 patients were evaluated in the safety
                                population.
                            </p>
                            <p>
                                Adverse drug reactions are Iisted according to
                                MedDRA system organ class and frequency
                                category. Please refer to the SmPC for the fuII
                                Iist of adverse events.
                            </p>
                            <div className="holder w-full overflow-x-scroll sm:overflow-auto">
                                <table>
                                    <thead>
                                        <tr className="text-left">
                                            <th>System Organ Class (MedDRA)</th>
                                            <th>Frequency category</th>
                                            <th>Adverse reaction</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Infections and infestations</td>
                                            <td>Common</td>
                                            <td>Sepsis</td>
                                        </tr>
                                        <tr>
                                            <td>Endocrine disorders</td>
                                            <td>Not known</td>
                                            <td>Secondary hypothyroidism</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Metabolism and nutrition
                                                disorders
                                            </td>
                                            <td>Very common</td>
                                            <td>Hyperkalaemia</td>
                                        </tr>
                                        <tr>
                                            <td>Psychiatric disorders</td>
                                            <td>Common</td>
                                            <td>Insomnia</td>
                                        </tr>
                                        <tr>
                                            <td>Nervous system disorders</td>
                                            <td>Common</td>
                                            <td>Seizures, headache</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>
                                                Vascular disorders
                                            </td>
                                            <td>Very common</td>
                                            <td>
                                                Hypertension, vascular access
                                                thrombosis (VAT)*
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Common</td>
                                            <td>Deep vein thrombosis (DVT)</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Respiratory, thoracic,
                                                mediastinal disorders
                                            </td>
                                            <td>Uncommon</td>
                                            <td>Pulmonary embolism</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>
                                                Gastrointestinal disorders
                                            </td>
                                            <td>Very common</td>
                                            <td>Nausea, diarrhoea</td>
                                        </tr>
                                        <tr>
                                            <td>Common</td>
                                            <td>Constipation, vomiting</td>
                                        </tr>
                                        <tr>
                                            <td>Hepatobiliary disorders</td>
                                            <td>Uncommon</td>
                                            <td>Hyperbilirubinaemia</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Skin and subcutaneous tissue
                                                disorders
                                            </td>
                                            <td>Not known</td>
                                            <td>
                                                Dermatitis Exfoliative
                                                Generalised (DEG)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                General disorders and
                                                administration site conditions
                                            </td>
                                            <td>Very common</td>
                                            <td>Peripheral oedema</td>
                                        </tr>
                                        <tr>
                                            <td>Investigations</td>
                                            <td>Not known</td>
                                            <td>
                                                Blood thyroid stimulating
                                                hormone (TSH) decreased
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>
                                *This adverse reaction is associated with CKD
                                patients who were on dialysis while receiving
                                roxadustat.
                            </p>
                            <p>
                                Frequency categories are defined as follows:
                                very common (&gt;1/10); common (&gt;1/100 to
                                &lt;1/10); uncommon (&gt;1/1,000 to &lt;1/100);
                                rare (&gt;1/10,000 to &lt;1/1,000); very rare
                                (&lt;1/10,000); not known (cannot be estimated
                                from the available data).
                            </p>
                            <AdverseEffect />
                            <p className="fade">
                                CKD, chronic kidney disease; DVT, deep vein
                                thrombosis; MedDRA, medical dictionary for
                                regulatory activities; SmPC, Summary of Product
                                Characteristics; VAT, vascular access
                                thrombosis.
                            </p>
                        </section>
                        <section id="contraindications-special-warnings-and-precautions-for-use">
                            <h1>
                                Contraindications, special warnings and
                                precautions for use
                            </h1>
                            <h4>Contraindications</h4>
                            <h3>
                                OROXAT is contraindicated in the following
                                conditions:
                            </h3>
                            <ul>
                                <li>
                                    Hypersensitivity to the active substance,
                                    peanut, soya or to any of the excipients
                                </li>
                                <li>Third trimester of pregnancy</li>
                                <li>Breastfeeding</li>
                            </ul>
                            <h3>Special warnings and precautions for use</h3>
                            <h4>Cardiovascular and mortality risk</h4>
                            <p>
                                Overall, the cardiovascular and mortality risk
                                for treatment with OROXAT has been estimated to
                                be comparable to the cardiovascular and
                                mortality risk for ESA therapy based on data
                                from direct comparison of both therapies (see
                                SmPC section 5.1). Since, for patients with
                                anaemia associated with CKD and not on dialysis,
                                this risk could not be estimated with sufficient
                                confidence versus placebo, a decision to treat
                                these patients with OROXAT should be based on
                                similar considerations that would be applied
                                before treating with an ESA. Further, several
                                contributing factors have been identified that
                                may impose this risk, including treatment,
                                non-responsiveness, and converting stable ESA
                                treated dialysis patients (see SmPC sections 4.2
                                and 5.1).
                            </p>
                            <p>
                                In the case of non-responsiveness, treatment
                                with OROXAT should not be continued beyond 24
                                weeks after the start of treatment (see SmPC
                                section 4.2).
                            </p>
                            <p>
                                Conversion of dialysis patients otherwise stable
                                on ESA treatment is only to be considered when
                                there is a valid clinical reason (see SmPC
                                section 4.2). Conversion of stable ESA treated
                                patients with anaemia associated with CKD and
                                not on dialysis was not studied. A decision to
                                treat these patients with OROXAT should be
                                based on a benefit risk consideration for the
                                individual patient.
                            </p>
                            <div className="holder">
                                <FooterBtn onClick={() => {}}>
                                    See the cv safety profile
                                </FooterBtn>
                            </div>
                            <h4>Thrombotic vascular events</h4>
                            <p>
                                The reported risk of thrombotic vascular events
                                (TVE) should be carefully weighed against the
                                benefits to be derived from treatment with
                                OROXAT, particularly in patients with
                                pre-existing risk factors for TVE, including
                                obesity and prior history of TVEs (e.g. deep
                                vein thrombosis [DVT] and pulmonary embolism
                                [PE]). DVT was reported as common and pulmonary
                                embolism as uncommon amongst the patients in
                                clinical studies. The majority of DVT and PE
                                events were serious.
                            </p>
                            <p>
                                Vascular access thrombosis (VAT) was reported as
                                very common amongst patients with
                                dialysis-dependent CKD (DD-CKD) in clinical
                                studies (see SmPC section 4.8).
                            </p>
                            <p>
                                In patients with DD-CKD, rates of VAT in
                                OROXAT-treated patients were highest in the
                                first 12 weeks following initiation of
                                treatment, at Hb values more than 12 g/dL and in
                                the setting of a Hb rise of more than 2 g/dL
                                over 4 weeks. It is recommended to monitor Hb
                                levels and adjust the dose using the dose
                                adjustment rules (see SmPC Table 2) to avoid Hb
                                levels of more than 12 g/dL and Hb rise of more
                                than 2 g/dL over 4 weeks.
                            </p>
                            <p>
                                Patients with signs and symptoms of TVEs should
                                be promptly evaluated and treated according to
                                standard of care. The decision to interrupt or
                                discontinue treatment should be based on a
                                benefit-risk consideration for the individual
                                patient.
                            </p>
                            <h4>Seizures</h4>
                            <p>
                                Seizures were reported as common amongst the
                                patients in clinical studies receiving OROXAT
                                (see SmPC section 4.8). OROXAT should be used
                                with caution in patients with a history of
                                seizures (convulsions or fits), epilepsy or
                                medical conditions associated with a
                                predisposition to seizure activity such as
                                central nervous system (CNS) infections. The
                                decision to interrupt or discontinue treatment
                                should be based on a benefit-risk consideration
                                of the individual patient.
                            </p>
                            <h4>Serious infections</h4>
                            <p>
                                The most commonly reported serious infections
                                were pneumonia and urinary tract infections.
                                Patients with signs and symptoms of an infection
                                should be promptly evaluated and treated
                                according to standard of care.
                            </p>
                            <h4>Sepsis</h4>
                            <p>
                                Sepsis was one of the most commonly reported
                                serious infections and included fatal events.
                                Patients with signs and symptoms of sepsis (e.g.
                                an infection that spreads throughout the body
                                with low blood pressure and the potential for
                                organ failure) should be promptly evaluated and
                                treated according to standard of care.
                            </p>
                            <h4>Secondary hypothyroidism</h4>
                            <p>
                                Cases of secondary hypothyroidism have been
                                reported with the use of roxadustat (see section
                                4.8). These reactions were reversible upon
                                roxadustat withdrawal. Monitoring of thyroid
                                function is recommended as clinically indicated.
                            </p>
                            <h4>Inadequate response to therapy</h4>
                            <p>
                                Inadequate response to therapy with OROXAT
                                should prompt a search for causative factors.
                                Nutrient deficiencies should be corrected.
                                lntercurrent infections, occult blood loss,
                                haemolysis, severe aluminium toxicity,
                                underlying haematologic diseases or bone marrow
                                fibrosis may also compromise the erythropoietic
                                response. A reticulocyte count shouId be
                                considered as part of the evaluation. If typical
                                causes of non-response are excluded, and the
                                patient has reticulocytopenia, an examination of
                                the bone marrow should be considered. In the
                                absence of an addressable cause for an
                                inadequate response to therapy, OROXAT should
                                not be continued beyond 24 weeks of therapy.
                            </p>
                            <h4>Hepatic impairment</h4>
                            <p>
                                Caution is warranted when OROXAT is
                                administered to patients with moderate hepatic
                                impairment (Child-Pugh class B). OROXAT is not
                                recommended for use in patients with severe
                                hepatic impairment (Child-Pugh class C) (see
                                SmPC section 5.2).
                            </p>
                            <h4>Pregnancy and contraception</h4>
                            <p>
                                OROXAT should not be initiated in women
                                planning on becoming pregnant, during pregnancy
                                or when anaemia associated with CKD is diagnosed
                                during pregnancy. In such cases, alternative
                                therapy should be started, if appropriate. If
                                pregnancy occurs while OROXAT is being
                                administered, treatment should be discontinued
                                and alternative treatment started, if
                                appropriate. Women of chiId bearing potential
                                must use highly effective contraception during
                                treatment and for at least one week after the
                                last dose of OROXAT (see SmPC sections 4.3,
                                4.6).
                            </p>
                            <h4>Misuse</h4>
                            <p>
                                Misuse may lead to an excessive increase in
                                packed cell volume. This may be associated with
                                life-threatening complications of the
                                cardiovascular system.
                            </p>
                            <h4>Excipients</h4>
                            <p>
                                OROXAT contains lactose. Patients with rare
                                hereditary problems of galactose intolerance,
                                total lactase deficiency or glucose-galactose
                                malabsorption should not take this medicinal
                                product. OROXAT contains Allura Red AC
                                aluminium lake (see SmPC section 6.1) which may
                                cause allergic reactions. OROXAT contains
                                traces of soya lecithin. Patients who are
                                allergic to peanut or soya, should not use this
                                medicinal product.
                            </p>
                            <p className="fade">
                                CKD, chronic kidney disease; CNS, central
                                nervous system; DD, dialysis-dependent; DVT,
                                deep vein thrombosis; ESA,
                                erythropoiesis-stimulating agent; Hb,
                                haemoglobin; PE, pulmonary embolism; TVE,
                                thrombolic vascular events; VAT, vascular access
                                thrombosis.
                            </p>
                        </section>
                        <section id="the-cardiovascular-safety-of-oroxat-was-assessed-in-a-meta-analysis-of-adjudicated-major-adverse-cardiovascular-events">
                            <h1>
                                The cardiovascular safety of OROXAT was
                                assessed in a meta-analysis of adjudicated major
                                adverse cardiovascular events
                            </h1>
                            <p>
                                <b>ACM:</b> all-cause mortality
                            </p>
                            <p>
                                <b>MACE:</b> a composite of ACM, non-fatal
                                myocardial infarction (MI) and stroke
                            </p>
                            <p>
                                <b>MACE+:</b> a composite of ACM, non-fatal MI,
                                stroke, and hospitalisation for either unstable
                                angina or congestive heart failure
                            </p>
                            <div className="holder">
                                <div className="flex flex-col gap-y-1 px-8 py-6 border border-neutral-700">
                                    <p>
                                        In a pool of patients with NDD CKD or
                                        IDD CKD (dialysis &lt;4 months), the
                                        on-treatment analyses support no
                                        evidence of increased cardiovascular
                                        safety or mortality risk between the ESA
                                        and OROXAT arms
                                    </p>
                                    <p className="!mb-0">
                                        Hazard ratios (HR) for MACE, MACE+ and
                                        ACM were 0.79, 0.78 and 0.78
                                        respectively
                                    </p>
                                </div>
                            </div>
                            <div className="holder">
                                <div className="flex flex-col gap-y-1 px-8 py-6 border border-neutral-700">
                                    <p>
                                        In patients stable on dialysis (&gt;4
                                        months) and stable on ESA, converting to
                                        OROXAT was associated with HRs of 1.18,
                                        1.03 and 1.23 for MACE, MACE+ and ACM
                                        respectively
                                    </p>
                                    <p className="!mb-0">
                                        A comparison of treatment effects cannot
                                        be reliably established in this setting
                                        because of the inherent risk in
                                        switching, however it is recommended
                                        that patients stable on dialysis and
                                        stable on ESA are not switched unless
                                        there is a valid clinical reason
                                    </p>
                                </div>
                            </div>
                            <p className="fade">
                                ACM, all-cause mortality; CKD, chronic kidney
                                disease; CV, cardiovascular; ESA,
                                erythropoiesis-stimulating agent; MI, myocardial
                                infarction.
                            </p>
                        </section>
                        <section id="no-increase-in-cv-or-mortality-risk-with-oroxat-compared-with-esa-in-patients-with-ndd-and-idd-ckd-ot">
                            <h1>
                                No increase in CV or mortality risk with OROXAT
                                compared with ESA in patients with NDD- and
                                IDD-CKD (OT)*
                            </h1>
                            <h4>HR OROXAT vs ESA (95% CI)</h4>
                            <Image
                                className="image w-full"
                                src={Safety1}
                                alt=""
                            />
                            <p>
                                <b>ACM:</b> all-cause mortality
                            </p>
                            <p>
                                <b>MACE:</b> a composite of ACM, non-fatal
                                myocardial infarction (MI) and stroke
                            </p>
                            <p>
                                <b>MACE+:</b> a composite of ACM, non-fatal MI,
                                stroke, and hospitalisation for either unstable
                                angina or congestive heart failure
                            </p>
                            <p>
                                For patients with anaemia associated with CKD
                                and not on dialysis, this risk could not be
                                estimated with sufficient confidence versus
                                placebo, so a decision to treat these patients
                                with roxadustat should be based on similar
                                considerations that would be applied before
                                treating with an ESA.
                            </p>
                            <h3>NDD and IDD pool compared with ESA</h3>
                            <p>
                                Baseline characteristics and treatment
                                discontinuation rates were comparable between
                                the pooled OROXAT and pooled ESA patients. The
                                on-treatment analyses support no evidence of
                                increased cardiovascular safety or mortality
                                risk with OROXAT compared with ESA in patients
                                with symptomatic anaemia associated with NDD-CKD
                                or IDD-CKD.
                            </p>
                            <div className="holder w-full overflow-x-scroll sm:overflow-auto">
                                <table className="bordered-table">
                                    <thead>
                                        <tr>
                                            <th rowSpan={2} colSpan={2}>
                                                OT analysis
                                            </th>
                                            <th colSpan={2}>MACE</th>
                                            <th colSpan={2}>MACE+</th>
                                            <th colSpan={2}>ACM</th>
                                        </tr>
                                        <tr>
                                            <th>
                                                OROXAT
                                                <br />
                                                n=1,083
                                            </th>
                                            <th>
                                                ESA
                                                <br />
                                                n=1,059
                                            </th>
                                            <th>
                                                OROXAT
                                                <br />
                                                n=1,083
                                            </th>
                                            <th>
                                                ESA
                                                <br />
                                                n=1,059
                                            </th>
                                            <th>
                                                OROXAT
                                                <br />
                                                n=1,083
                                            </th>
                                            <th>
                                                ESA
                                                <br />
                                                n=1,059
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan={2}>Events, n (%)</td>
                                            <td>105 (9.7)</td>
                                            <td>136 (12.8)</td>
                                            <td>134 (12.4)</td>
                                            <td>171 (16.1)</td>
                                            <td>74 (6.8)</td>
                                            <td>99 (9.3)</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>IR</td>
                                            <td>6.5</td>
                                            <td>8.2</td>
                                            <td>8.3</td>
                                            <td>10.3</td>
                                            <td>4.6</td>
                                            <td>6.0</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>HR (95% CI)</td>
                                            <td colSpan={2}>
                                                0.79 (0.61, 1.02)
                                            </td>
                                            <td colSpan={2}>
                                                0.78 (0.62, 0.98)
                                            </td>
                                            <td colSpan={2}>
                                                0.78 (0.57, 1.05)
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="fade">
                                ACM, all-cause mortality; Cl, confidence
                                interval; CKD, chronic kidney disease; ESA,
                                erythropoiesis-stimulating agent; Hb,
                                haemoglobin; HR, hazard ratio; IDD,
                                incident-dialysis-dependent; IR, incidence rate
                                (number of patients with event/100 patient
                                years); MACE, time to first occurrence of death,
                                myocardial infarction or stroke; MACE+, time to
                                first occurrence of death, myocardial
                                infarction, stroke, and hospitalisation for
                                either unstable angina and/or congestive heart
                                failure; NDD, non-dialysis-dependent; OT,
                                on-treatment.
                            </p>
                            <p>
                                *Please see OROXAT SmPC for further information
                                on CV and mortality risk.
                            </p>
                            <h4>
                                Data for patients converting from ESA in stable
                                dialysis should be interpreted with caution due
                                to an inherent risk in switching to a new
                                treatment (OT)*
                            </h4>
                            <p>
                                Conversion of dialysis patients otherwise stable
                                on ESA treatment is only to be considered when
                                there is a valid clinical reason.
                            </p>
                            <h3>HR OROXAT vs ESA (95% CI)</h3>
                            <div className="holder">
                                <Image
                                    className="image w-full"
                                    src={Safety2}
                                    alt=""
                                />
                            </div>
                            <p>
                                <b>ACM:</b> all-cause mortality
                            </p>
                            <p>
                                <b>MACE:</b> a composite of ACM, non-fatal
                                myocardial infarction (MI) and stroke
                            </p>
                            <p>
                                <b>MACE+:</b> a composite of ACM, non-fatal MI,
                                stroke, and hospitalisation for either unstable
                                angina or congestive heart failure
                            </p>
                            <h4>
                                SDD pool in an ESA conversion setting (OT
                                analysis)
                            </h4>
                            <p>
                                Patients allocated to OROXAT were switched from
                                an ESA at the start of the study. The inherent
                                risk in switching to any new treatment vs.
                                remaining on a treatment with a stabilised Hb
                                may confound the observed results. Therefore,
                                any comparison of treatment effect estimates
                                cannot be reliably established.
                            </p>
                            <div className="holder w-full overflow-x-scroll sm:overflow-auto">
                                <table className="bordered-table">
                                    <thead>
                                        <tr>
                                            <th rowSpan={2} colSpan={2}>
                                                OT analysis
                                            </th>
                                            <th colSpan={2}>MACE</th>
                                            <th colSpan={2}>MACE+</th>
                                            <th colSpan={2}>ACM</th>
                                        </tr>
                                        <tr>
                                            <th>
                                                OROXAT
                                                <br />
                                                n=1,594
                                            </th>
                                            <th>
                                                ESA
                                                <br />
                                                n=1,594
                                            </th>
                                            <th>
                                                OROXAT
                                                <br />
                                                n=1,594
                                            </th>
                                            <th>
                                                ESA
                                                <br />
                                                n=1,594
                                            </th>
                                            <th>
                                                OROXAT
                                                <br />
                                                n=1,594
                                            </th>
                                            <th>
                                                ESA
                                                <br />
                                                n=1,594
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan={2}>Events, n (%)</td>
                                            <td>297 (18.6)</td>
                                            <td>301 (18.8)</td>
                                            <td>357 (22.4)</td>
                                            <td>403 (25.3)</td>
                                            <td>212 (13.3)</td>
                                            <td>207 (13.0)</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>IR</td>
                                            <td>10.4</td>
                                            <td>9.2</td>
                                            <td>12.5</td>
                                            <td>12.3</td>
                                            <td>7.4</td>
                                            <td>6.3</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>HR (95% CI)</td>
                                            <td colSpan={2}>
                                                1.18 (1.00, 1.38)
                                            </td>
                                            <td colSpan={2}>
                                                1.03 (0.90, 1.19)
                                            </td>
                                            <td colSpan={2}>
                                                1.23 (1.02, 1.49)
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="fade">
                                ACM, all-cause mortality; Cl, confidence
                                interval; ESA, erythropoiesis-stimulating agent;
                                Hb, haemoglobin; HR, hazard ratio; IR, incidence
                                rate (number of patients with event/100 patient
                                years); MACE, time to first occurrence of death,
                                myocardial infarction or stroke; MACE+, time to
                                first occurrence of death, myocardial
                                infarction, stroke, and hospitalisation for
                                either unstable angina and/or congestive heart
                                failure; OT, on-treatment; SDD,
                                stable-dialysis-dependent.
                            </p>
                            <p>
                                *Please see OROXAT SmPC for further information
                                on CV and mortality risk.
                            </p>
                        </section>
                        <section id="initial-hb-monitoring-requirements-for-oroxat-are-similar-to-other-treatments-for-symptomatic-anaemia-associated-with-ckd">
                            <h1>
                                Initial Hb monitoring requirements for OROXAT
                                are similar to other treatments for symptomatic
                                anaemia associated with CKD
                            </h1>
                            <p>
                                Increasing Hb levels with anaemia of CKD
                                treatments can be associated with an increased
                                risk of adverse events:
                            </p>
                            <ul>
                                <li>
                                    Rapid rises in Hb e.g. &gt;2 g/dL over 4
                                    weeks, or very high Hb levels (&gt;12 g/dL)
                                    can be associated with an increased risk of
                                    thrombotic compIications9
                                </li>
                                <li>
                                    For patients started on OROXAT, Hb levels
                                    should be monitored every 2 weeks until the
                                    target Hb level of 10-12 g/dL is achieved
                                    and stabilised, and every 4 weeks thereafter
                                    or as clinically indicated1
                                </li>
                            </ul>
                            <h4>
                                With OROXAT, the dose can be individualised to
                                achieve and maintain target levels of 10-12
                                g/dL.
                            </h4>
                            <p className="fade">
                                CKD, chronic kidney disease; Hb, haemoglobin.
                            </p>
                            <AdverseEffect className="mt-8" />
                        </section>
                    </div>
                </Layout2>
            </Layout1>
        </>
    );
}
