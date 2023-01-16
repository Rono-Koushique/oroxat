import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
    imgSrc: StaticImageData;
    title: string;
}

export default function HeroSlide({ imgSrc, title }: Props) {
    return (
        <div className="h-[82vh] w-full relative">
            <Image
                className="h-full w-full object-cover"
                src={imgSrc}
                alt=""
                priority={true}
            />
            <div
                className="absolute top-0 left-1/2 h-full w-full max-w-6xl 
                        flex flex-col justify-between -translate-x-1/2 px-12 py-20"
            >
                <h1 className="text-3xl text-white w-1/2 text-left font-semibold">
                    {title}
                </h1>
                <h2
                    className="text-sm
                        text-gray-200 w-1/2 text-left"
                >
                    OROXAT (roxadustat) is indicated for treatment of adult
                    patients with symptomatic anaemia associated with chronic
                    kidney disease (CKD)
                </h2>
            </div>
        </div>
    );
}
