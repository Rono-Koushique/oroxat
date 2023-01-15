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
                <Frame className="max-w-6xl mx-auto flex items-center justify-between px-12 py-20">
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
                            <span>oroxat</span>, Astellas logo are registerd
                            trademarks of SKF Pharma Ltd.
                        </p>
                        <p>Date of preparation: January 2023</p>
                    </div>

                    {/* footer button section */}
                    <div className="flex flex-col gap-y-2">
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
            <Wall className="bg-fuchsia-">
                <Frame className="max-w-6xl mx-auto px-12 py-6 flex items-center justify-between 
                            text-fuchsia-900 text-xs tracking-wide font-semibold">
                    <div className="uppercase tracking-wider">
                        <Link href='/'>update cookie preferences</Link>
                    </div>
                    <div className="capitalize flex items-center divide-x divide-fuchsia-900">
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
