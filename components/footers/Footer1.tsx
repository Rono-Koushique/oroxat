import React from "react";
import Wall from "../containers/Wall";
import Frame from "../containers/Frame";
import FooterBtn from "../buttons/FooterBtn";
import Image from "next/image";
import CompanyLogo from "public/images/company-logo-light.png";
import Link from "next/link";

type Props = {};

export default function Footer1({}: Props) {
    return (
        <footer>
            <Wall className="bg-fuchsia-700">
                <Frame className="max-w-6xl mx-auto flex flex-col items-center gap-4 justify-between px-8 py-16
                            md:flex-row
                            lg:px-12 lg:py-20">
                    {/* description */}
                    <div className="flex flex-col gap-y-3 text-neutral-100 text-sm">
                        <Image
                            className="h-8 w-fit"
                            src={CompanyLogo}
                            priority={true}
                            alt="company-logo"
                        />
                        <p className="mt-4 uppercase ">
                            this site is intended for healthcare professionals only
                        </p>
                        <p>© 2023 SKF Pharma Ltd.</p>
                        <p>
                            <span>oroxat</span> logo is registerd
                            trademarks of SKF Pharma Ltd.
                        </p>
                        <p>Date of preparation: January 2023</p>
                    </div>

                    {/* footer button section */}
                    <div className="flex flex-col gap-y-2 w-full md:w-fit">
                        <FooterBtn
                            onClick={() => console.log("footer button pressed")}
                        >
                            view prescribing information gb
                        </FooterBtn>
                        <FooterBtn
                            onClick={() => console.log("footer button pressed")}
                        >
                            view prescribing information ni
                        </FooterBtn>
                    </div>
                </Frame>
            </Wall>
            <Wall className="bg-gray-700">
                <Frame className="max-w-6xl mx-auto px-12 py-6 flex items-center justify-center md:justify-between 
                            text-neutral-100 text-xs tracking-wide font-semibold">
                    <div className="uppercase tracking-wider">
                        <Link href='/'>update cookie preferences</Link>
                    </div>
                    <div className="capitalize hidden md:flex items-center divide-x divide-neutral-100">
                        <Link className="pr-2" href='/'>privacy notice</Link>
                        <Link className="footer-link" href='/'>terms of use</Link>
                        <Link className="footer-link" href='/'>contact us</Link>
                        <Link className="footer-link" href='/'>site map</Link>
                        <Link className="footer-link" href='/'>accessibility</Link>
                        <Link className="pl-2" href='/'>cookie policy</Link>
                    </div>
                </Frame>
            </Wall>
        </footer>
    );
}
