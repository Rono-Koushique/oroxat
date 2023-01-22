import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
    imgSrc: StaticImageData;
    children?: React.ReactNode | React.ReactNode;
};

export default function Benifit({ imgSrc, children }: Props) {
    return (
        <div className="flex">
            <div className="w-full flex flex-col justify-center 
                        bg-fuchsia-700 px-8 py-8 md:w-3/5">
                {children}
            </div>
            <div className="hidden md:w-2/5 md:block">
                <Image className="h-48 object-cover" src={imgSrc} alt="" />
            </div>
        </div>
    );
}
