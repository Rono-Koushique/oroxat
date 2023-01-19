import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
    imgSrc: StaticImageData;
    caption: string;
};

export default function BodyImage({ imgSrc, caption }: Props) {
    return (
        <div className="px-2 py-6 bg-gray-100 flex flex-col items-center w-full">
            <Image className="h-16 w-fit mb-4" src={imgSrc} alt="" />
            <p className="text-center">{caption}</p>
        </div>
    );
}
