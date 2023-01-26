import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
    src?: StaticImageData;
    href?: string;
    text: string;
};

export default function StepCard({ src, text, href }: Props) {
    return (
        <Link
            className="relative bg-white h-full w-full overflow-hidden group"
            href={href ? href : "/"}
        >
            {src && (
                <div className="h-48 overflow-hidden">
                    <Image
                        className="h-48 object-cover group-hover:scale-110
                                    transition duration-500 ease-in-out"
                        priority={true}
                        src={src}
                        alt=""
                    />
                </div>
            )}
            <p
                className="uppercase px-6 py-4 font-semibold text-fuchsia-700
                        group-hover:underline group-hover:underline-offset-2"
            >
                {text}
            </p>
        </Link>
    );
}
