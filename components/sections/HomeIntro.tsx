import React from "react";
import Wall from "../containers/Wall";
import VFrame from "../containers/VFrame";
import CompassImage from "public/images/compass.png";
import Image from "next/image";

type Props = {};

export default function HomeIntro({}: Props) {
    return (
        <Wall>
            <VFrame className="md:flex-row items-center">
                {/* text section */}
                <div className="content flex flex-col gap-2">
                    <h1>
                        Introducting OROXAT<sup>TM</sup>-
                    </h1>
                    <h3>A landmark in anaemia of CKD</h3>
                    <p>
                        OROXAT (roxadustat) is the first HIF-PH inhibitor to
                        have gained approval for the treatment of adult patients
                        with symptomatic anaemia associated with CKD. It mimics
                        the body&apos;s physiological response to hypoxia at
                        high altitude3 by increasing production of
                        erythropoietin and improving iron availability. This
                        increases haemoglobin levels and red blood cell
                        production, with reduced use of intravenous iron
                        compared with ESA.1 OROXAT is a tablet taken by mouth 3
                        times a week, on non-consecutive days.1 We invite you to
                        explore this website to discover the difference OROXAT
                        can make to your patients.
                    </p>

                    <ul>
                        <li>OROXAT SmPC</li>
                        <li>
                            Sanghani NS, Haase VH. Adv Chronic Kidney Dis.
                            2019;26(4):253-266.
                        </li>
                        <li>
                            Del Vecchio L, Locatelli F. Expert Opin Investig
                            Drugs. 2018;27(1):125-133.
                        </li>
                    </ul>
                </div>

                {/* card */}
                <div className="flex flex-col items-center px-5 py-7 rounded-2xl shadow-2xl h-fit min-w-[16rem] w-full">
                    <Image
                        className="w-24"
                        src={CompassImage}
                        priority={false}
                        alt=""
                    />
                    <h2 className="text-2xl text-fuchsia-700 font-semibold leading-none mt-6">
                        Any
                    </h2>
                    <h2 className="text-2xl text-fuchsia-500 font-semibold">
                        questions?
                    </h2>
                    <button
                        className="bg-fuchsia-700 w-full py-4 text-gray-50 
                                                text-sm font-semibold mt-4 rounded"
                    >
                        Ask your guide
                    </button>
                </div>
            </VFrame>
        </Wall>
    );
}
