import React from "react";
import Wall from "../containers/Wall";
import VFrame from "../containers/VFrame";
import Wallpaper from "public/images/home-2.jpg";
import Image from "next/image";
import FooterBtn from "../buttons/FooterBtn";

type Props = {};

export default function HomeTell({}: Props) {
    return (
        <Wall className="relative">
            <VFrame className="items-center">
                <div className="flex flex-col items-center bg-white w-fit p-8 md:px-16 lg:py-8 gap-y-3 rounded-md">
                    <h2 className="text-2xl md:text-3xl font-semibold text-fuchsia-700">
                        Tell me more
                    </h2>
                    <FooterBtn
                        className="w-full rounded"
                        onClick={() => console.log("tell me")}
                    >
                        Request Further Information
                    </FooterBtn>
                </div>
            </VFrame>
            <Image
                className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
                src={Wallpaper}
                alt=""
            />
        </Wall>
    );
}
