import React from "react";
import navlinks from "./navlinks";
import Link from "next/link";
import Wall from "../containers/Wall";
import Frame from "../containers/Frame";
import Image from "next/image";
import BrandLogo from "public/images/brand-logo.png";
import SearchAll from "../inputs/SearchAll";
import Hamburger from "../buttons/Hamburger";

type Props = {};

export default function Navbar1({}: Props) {
    const [open, setOpen] = React.useState<boolean>(false);
    return (
        <header>
            {/* logo and search section */}
            <Wall>
                <Frame className="max-w-6xl mx-auto px-8 lg:px-12 py-4 flex items-center">
                    {/* logo section */}
                    <Link href='/'>
                        <Image
                            className="h-12 w-fit cursor-pointer"
                            src={BrandLogo}
                            alt="brand-logo"
                            priority={true}
                        />
                    </Link>

                    {/* search input */}
                    <div className="hidden md:block ml-auto">
                        <SearchAll />
                    </div>
                    <Hamburger
                        className="ml-auto md:ml-4 lg:hidden"
                        open={open}
                        setOpen={setOpen}
                    />
                </Frame>
            </Wall>

            {/* main navbar section */}
            <Wall className="hidden bg-fuchsia-700 lg:block">
                <Frame className="max-w-6xl mx-auto px-12">
                    <ul className="flex justify-around gap-x-8 py-4">
                        {navlinks.map((navlink) => {
                            return (
                                <li className="text-center" key={navlink.title}>
                                    <Link href={navlink.href}>
                                        <p className="text-white font-semibold text-xs uppercase ">
                                            {navlink.title}
                                        </p>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </Frame>
            </Wall>
        </header>
    );
}
