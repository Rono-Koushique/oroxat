import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
    src?: StaticImageData;
    text: string;
};

export default function StepCard({ src, text }: Props) {
    return <div className="bg-white h-full w-full">
        {src && <Image 
            className="h-48 object-cover"
            src={src}
            alt=""
        />}
        <p className="uppercase px-6 py-4 font-semibold text-fuchsia-700">{text}</p>
    </div>;
}
