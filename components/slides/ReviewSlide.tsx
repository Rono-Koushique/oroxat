import React from "react";
import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify/react";

type Props = {
    imgSrc: StaticImageData;
    title: string;
    className?: string;
};

export default function ReviewSlide({ imgSrc, title, className }: Props) {
    return (
        <div
            className={`w-full px-24 flex flex-col pb-20 ${
                className ? className : ""
            }`}
        >
            <div className="h-[28rem] w-full relative">
                <Image
                    className="h-[28rem] w-full object-cover"
                    src={imgSrc}
                    alt=""
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        text-4xl rounded-full bg-white p-4 cursor-pointer"
                >
                    <Icon
                        className="text-fuchsia-700"
                        icon="material-symbols:play-arrow"
                    />
                </div>
            </div>
            <div
                className="w-full h-16 bg-neutral-700 flex items-center justify-center
                                    font-semibold text-neutral-100 text-lg"
            >
                {title}
            </div>
        </div>
    );
}
