import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
    imgSrc: StaticImageData;
    title: string;
}

export default function HeroSlide({ imgSrc, title }: Props) {
    return (
        <div className="h-[76vh] lg:h-[82vh] w-full relative">
            <Image
                className="h-full w-full object-cover"
                src={imgSrc}
                alt=""
                priority={true}
            />
            <div
                className="absolute top-0 left-1/2 h-full w-full max-w-6xl 
                        flex flex-col justify-between -translate-x-1/2 px-8 py-12 
                        lg:px-12 lg:py-20"
            >
                <h1 className="text-xl text-white w-3/4 text-left font-semibold
                            md:text-2xl lg:text-3xl lg:w-1/2">
                    {title}
                </h1>
                <h2
                    className="text-sm
                        text-gray-200 w-full md:w-1/2 text-left"
                >
                    OROXAT (roxadustat) is indicated for treatment of adult
                    patients with symptomatic anaemia associated with chronic
                    kidney disease (CKD)
                </h2>
            </div>
        </div>
    );
}
