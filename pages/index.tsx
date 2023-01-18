import Head from "next/head";
import { Inter } from "@next/font/google";
import Layout1 from "@/components/layouts/Layout1";
import Hero from "@/components/sections/Hero";
import HomeIntro from "@/components/sections/HomeIntro";
import HomeSteps from "@/components/sections/HomeSteps";
import HomeReviews from "@/components/sections/HomeReviews";
import HomeTell from "@/components/sections/HomeTell";
import HomeNews from "@/components/sections/HomeNews";
import Size from "@/components/extras/Size";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
                <section>
                    <Hero />
                </section>
                <section>
                    <HomeIntro />
                </section>
                <section>
                    <HomeSteps />
                </section>
                <section>
                    <HomeReviews />
                </section>
                <section>
                    <HomeTell />
                </section>
                <section>
                    <HomeNews />
                </section>
            </Layout1>
            <Size />
        </>
    );
}
