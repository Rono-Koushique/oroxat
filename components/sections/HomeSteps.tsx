import React from "react";
import Wall from "../containers/Wall";
import VFrame from "../containers/VFrame";
import StepCard from "../cards/StepCard";

import StepImage1 from "public/images/step-1.jpg";
import StepImage2 from "public/images/step-2.jpg";
import StepImage3 from "public/images/step-3.jpg";
import StepImage4 from "public/images/step-4.jpg";
import StepImage5 from "public/images/step-5.jpg";
import StepImage6 from "public/images/step-6.jpg";

type Props = {};

export default function HomeSteps({}: Props) {
    return (
        <Wall className="bg-gray-700">
            <VFrame>
                {/* heading  */}
                <div className="content">
                    <h1 className="!text-gray-100 !mb-0 w-full md:w-1/2">
                        Where are you in your journey to explore OROXAT ?
                    </h1>
                </div>

                {/* steps section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <StepCard src={StepImage1} href="/challange" text="Assess the Challenge" />
                    <StepCard src={StepImage2} href="/oroxat" text="Discover Oroxat" />
                    <StepCard src={StepImage3} href="/evidence" text="View The Evidence" />
                    <StepCard src={StepImage4} href="/how-to-use-oroxat" text="See How It Is Given" />
                    <StepCard src={StepImage5} href="/patient-perpective" text="The Patient Perspective" />
                    <StepCard src={StepImage6} href="/viewpoint" text="View From The Top" />
                </div>
            </VFrame>
        </Wall>
    );
}
