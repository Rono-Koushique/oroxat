import React from "react";
import { Icon } from "@iconify/react";

interface Props {
    prevBtnFunc: Function;
    nextBtnFunc: Function;
    currentImageIndex: number;
    count: number;
}

export default function SlideBtn({
    prevBtnFunc,
    nextBtnFunc,
    currentImageIndex,
    count,
}: Props) {
    return (
        <div className="relative">
            <div
                onClick={() => prevBtnFunc()}
                className="absolute z-30 top-[8rem] md:top-[14rem] left-0 p-2
                        -translate-y-[40%] cursor-pointer bg-white opacity-80 
                        md:opacity-100 shadow-xl rounded-full"
            >
                <Icon
                    className={`text-4xl ${
                        currentImageIndex == 0
                            ? "text-neutral-300"
                            : "text-neutral-700"
                    }`}
                    icon="carbon:chevron-left"
                />
            </div>
            <div
                onClick={() => nextBtnFunc()}
                className="text-6xl absolute z-30 top-[8rem] md:top-[14rem] right-0 p-2 
                        -translate-y-[40%] cursor-pointer bg-white opacity-80 
                        md:opacity-100 shadow-xl rounded-full"
            >
                <Icon
                    className={`text-4xl ${
                        currentImageIndex == count - 1
                            ? "text-neutral-300"
                            : "text-neutral-700"
                    }`}
                    icon="carbon:chevron-right"
                />
            </div>
        </div>
    );
}
