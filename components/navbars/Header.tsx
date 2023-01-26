import React from "react";
import Link from "next/link";
import Wall from "../containers/Wall";
import Frame from "../containers/Frame";
import Image from "next/image";
import BrandLogo from "public/images/brand-logo.png";
import SearchAll from "../inputs/SearchAll";
import Hamburger from "../buttons/Hamburger";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

type Props = {};

export default function Header({}: Props) {
    const [open, setOpen] = React.useState<boolean>(false);
    return (
        <header>
            <Wall>
                <Frame className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-4 flex items-center">
                    <Link href="/">
                        <Image
                            className="h-12 w-fit cursor-pointer"
                            src={BrandLogo}
                            alt="brand-logo"
                            priority={true}
                        />
                    </Link>

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

            <Navbar />
            {open && <SideNav setOpen={setOpen}/>}
        </header>
    );
}
