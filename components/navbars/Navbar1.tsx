import navlinks from "./navlinks";
import Link from "next/link";
import Wall from "../containers/Wall";
import Frame from "../containers/Frame";
import Image from "next/image";
import BrandLogo from "public/images/brand-logo.png";
import SearchAll from "../inputs/SearchAll";

type Props = {};

export default function Navbar1({}: Props) {
    return (
        <header>
            {/* logo and search section */}
            <Wall>
                <Frame className="max-w-6xl mx-auto px-12 py-4 flex items-center justify-between">
                    {/* logo section */}
                    <Image
                        className="h-12 w-fit"
                        src={BrandLogo}
                        alt="brand-logo"
                        priority={true}
                    />

                    {/* search input */}
                    <SearchAll />
                </Frame>
            </Wall>

            {/* main navbar section */}
            <Wall className="bg-fuchsia-700">
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
