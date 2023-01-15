import React from "react";
import Wall from "../containers/Wall";
import Frame from "../containers/Frame";
import StepCard from "../cards/StepCard";

import StepImage1 from "public/images/step-1.jpg"
import StepImage2 from "public/images/step-2.jpg"
import StepImage3 from "public/images/step-3.jpg"
import StepImage4 from "public/images/step-4.jpg"
import StepImage5 from "public/images/step-5.jpg"
import StepImage6 from "public/images/step-6.jpg"

type Props = {};

export default function HomeSteps({}: Props) {
    return (
        <Wall className="bg-gray-700">
            <Frame className="max-w-6xl mx-auto px-12 py-20">
                {/* heading  */}
                <div>
                    <h2 className="text-3xl text-gray-100 font-semibold w-1/2">
                        Where are you in your journey to explore OROXAT ?
                    </h2>
                </div>

                {/* steps section */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                    <StepCard src={StepImage1} text="Assess the Challenge"/>
                    <StepCard src={StepImage2} text="Discover Oroxat"/>
                    <StepCard src={StepImage3} text="View The Evidence"/>
                    <StepCard src={StepImage4} text="See How It Is Given"/>
                    <StepCard src={StepImage5} text="The Patient Perspective"/>
                    <StepCard src={StepImage6} text="View From The Top"/>
                </div>
            </Frame>
        </Wall>
    );
}
