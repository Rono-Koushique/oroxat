import React from "react";
import Wall from "../containers/Wall";
import Frame from "../containers/Frame";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import navlinks from "./navlinks";
import { Icon } from "@iconify/react";
import BrandLogo from "public/images/brand-logo.png";

type Props = {
    setOpen: Function;
};

export default function SideNav({ setOpen }: Props) {
    return (
        <Wall>
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
                    transition={{ duration: 0.5, type: "tween" }}
                    className={`w-[18rem] min-w-fit h-full bg-white p-4 flex flex-col`}
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
    );
}
