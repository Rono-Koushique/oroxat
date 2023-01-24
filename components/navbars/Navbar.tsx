import React from "react";
import navlinks from "./navlinks";
import Link from "next/link";
import Wall from "../containers/Wall";
import Frame from "../containers/Frame";

type Props = {};

export default function Navbar({}: Props) {
    return (
        <>
            {/* main navbar section */}
            <Wall className="hidden bg-fuchsia-700 lg:block">
                <Frame className="max-w-6xl mx-auto px-12">
                    <ul className="flex justify-around">
                        {navlinks.map((navlink) => {
                            return (
                                <li
                                    className="text-center flex"
                                    key={navlink.title}
                                >
                                    <Link
                                        href={navlink.href}
                                        className="h-full py-4 px-4 hover:bg-black/10
                                            transition duration-150"
                                    >
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
        </>
    );
}
