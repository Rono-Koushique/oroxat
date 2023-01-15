import React from "react";
import Wall from "../containers/Wall";
import Frame from "../containers/Frame";
import CompassImage from "public/images/compass.png";
import Image from "next/image";

type Props = {};

export default function HomeIntro({}: Props) {
    return (
        <Wall>
            <Frame className="max-w-6xl mx-auto px-12 py-20 flex items-center justify-between gap-x-12">
                {/* text section */}
                <div>
                    <h2 className="text-3xl text-fuchsia-700 font-semibold">
                        Introducting OROXAT<sup>TM</sup>-
                    </h2>
                    <h2 className="text-3xl text-fuchsia-500 font-semibold">
                        a landmark in anaemia of CKD
                    </h2>
                    <p className="text-gray-500 leading-relaxed mt-4">
                        OROXAT (roxadustat) is the first HIF-PH inhibitor to
                        have gained approval for the treatment of adult patients
                        with symptomatic anaemia associated with CKD. It mimics
                        the body's physiological response to hypoxia at high
                        altitude3 by increasing production of erythropoietin and
                        improving iron availability. This increases haemoglobin
                        levels and red blood cell production, with reduced use
                        of intravenous iron compared with ESA.1 OROXAT is a
                        tablet taken by mouth 3 times a week, on non-consecutive
                        days.1 We invite you to explore this website to discover
                        the difference OROXAT can make to your patients.
                    </p>

                    <ul className="text-sm text-gray-500 mt-8 leading-snug">
                        <li>1. OROXAT SmPC</li>
                        <li>
                            2. Sanghani NS, Haase VH. Adv Chronic Kidney Dis.
                            2019;26(4):253-266.
                        </li>
                        <li>
                            3. Del Vecchio L, Locatelli F. Expert Opin Investig
                            Drugs. 2018;27(1):125-133.
                        </li>
                    </ul>
                </div>

                {/* card */}
                <div className="flex flex-col items-center px-5 py-7 rounded-2xl shadow-2xl min-w-[16rem]">
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
            </Frame>
        </Wall>
    );
}
