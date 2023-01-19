import React from "react";
import navlinks from "./navlinks";
import Link from "next/link";
import Wall from "../containers/Wall";
import Frame from "../containers/Frame";
import Image from "next/image";
import BrandLogo from "public/images/brand-logo.png";
import SearchAll from "../inputs/SearchAll";
import Hamburger from "../buttons/Hamburger";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

type Props = {};

export default function Navbar1({}: Props) {
    const [open, setOpen] = React.useState<boolean>(false);
    return (
        <header>
            {/* logo and search section */}
            <Wall>
                <Frame className="max-w-6xl mx-auto px-8 lg:px-12 py-4 flex items-center">
                    {/* logo section */}
                    <Link href="/">
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

            {/* SideNavBar section */}
            {open && (
                <Wall
                // className={`lg:hidden ${open ? "" : "hidden"}`}
                >
                    <Frame className="fixed top-0 left-0 h-screen z-50 flex justify-start touch-none">
                        {/* black background */}
                        <div
                            className={`absolute inset-0 w-screen h-full -z-10 bg-black/50`}
                            onClick={() => setOpen(false)}
                        />

                        {/* main container */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 0.5, type:'tween' }}
                            className={`w-[18rem] h-full bg-white p-4 flex flex-col`}
                        >
                            <Link href="/">
                                <Image
                                    className="h-12 ml-2 w-fit cursor-pointer"
                                    src={BrandLogo}
                                    alt="brand-logo"
                                    priority={true}
                                />
                            </Link>
                            <ul className="flex flex-col h-full items-start gap-2 mt-8">
                                {navlinks.map((navlink, idx) => {
                                    return (
                                        idx !== 0 && (
                                            <li
                                                className="select-none text-left px-2 py-3 w-full rounded-lg  active:bg-gray-200"
                                                key={navlink.title}
                                            >
                                                <Link
                                                    href={navlink.href}
                                                    className="select-none flex items-center gap-2"
                                                >
                                                    <Icon
                                                        icon="material-symbols:arrow-circle-right"
                                                        className="text-xl text-gray-900"
                                                    />
                                                    <p className="font-medium text-gray-700 capitalize select-none">
                                                        {navlink.title}
                                                    </p>
                                                </Link>
                                            </li>
                                        )
                                    );
                                })}
                            </ul>
                        </motion.div>
                    </Frame>
                </Wall>
            )}
        </header>
    );
}
