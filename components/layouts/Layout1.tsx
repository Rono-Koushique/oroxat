import React from "react";
import Navbar1 from "../navbars/Navbar1";
import Footer1 from "../footers/Footer1";

type Props = {
    children: React.ReactNode | React.ReactNode[];
};

export default function Layout1({ children }: Props) {
    return (
        <main className="min-h-screen flex flex-col w-full">
            <section>
                <Navbar1 />
            </section>
            <section className="flex-grow">
                {children}
            </section>
            <section>
                <Footer1 />
            </section>
        </main>
    );
}
