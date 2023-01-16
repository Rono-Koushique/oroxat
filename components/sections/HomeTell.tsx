import React from "react";
import Wall from "../containers/Wall";
import Frame from "../containers/Frame";
import Wallpaper from "public/images/home-2.jpg";
import Image from "next/image";
import FooterBtn from "../buttons/FooterBtn";

type Props = {};

export default function HomeTell({}: Props) {
    return (
        <Wall>
            <Frame className="relative w-full flex justify-center py-20">
                <Image
                    className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
                    src={Wallpaper}
                    alt=""
                />
                <div className="flex flex-col items-center bg-white w-fit text-3xl 
                            font-semibold px-16 py-8 gap-y-3 text-fuchsia-700">
                    <h2>Tell me more</h2>
                    <FooterBtn onClick={()=>console.log('tell me')}>
                        Request Further Information
                    </FooterBtn>
                </div>
            </Frame>
        </Wall>
    );
}