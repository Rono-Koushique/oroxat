import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
    src?: StaticImageData;
    text: string;
    cardClassName?: string;
    imageClassName?: string;
    textClassName?: string;
};

export default function GridCard1({
    src,
    text,
    cardClassName,
    imageClassName,
    textClassName,
}: Props) {
    return (
        <div className={`bg-white h-full w-full flex flex-col rounded overflow-hidden cursor-pointer ${cardClassName!}`}>
            {src && (
                <Image
                    className={`h-48 object-cover ${imageClassName!}`}
                    src={src}
                    alt=""
                />
            )}
            <p
                className={`h-full px-6 py-4 font-semibold !m-0 ${textClassName!}`}
            >
                {text}
            </p>
        </div>
    );
}
