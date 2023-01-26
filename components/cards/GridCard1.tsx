import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
    src?: StaticImageData;
    href?: string;
    text: string;
    cardClassName?: string;
    imageClassName?: string;
    textClassName?: string;
};

export default function GridCard1({
    src,
    href,
    text,
    cardClassName,
    imageClassName,
    textClassName,
}: Props) {
    return (
        <Link
            className={`relative bg-white h-full w-full flex flex-col cursor-pointer group ${cardClassName!}`}
            href={href ? href : "/"}
        >
            {src && (
                <div className="h-48 overflow-hidden">
                    <Image
                        className={`h-48 object-cover group-hover:scale-110
                                    transition duration-500 ease-in-out ${imageClassName}}`}
                        src={src}
                        alt=""
                    />
                </div>
            )}
            <p
                className={`px-6 py-4 font-semibold text-fuchsia-700
                        group-hover:underline group-hover:underline-offset-2 ${textClassName!}`}
            >
                {text}
            </p>
        </Link>
    );
}
