import React from "react";
import Wall from "../containers/Wall";
import Frame from "../containers/Frame";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {};

export default function HomeReviews({}: Props) {
    return (
        <Wall>
            <Frame className="max-w-6xl mx-auto px-12 py-20">
                <div>
                    <h2 className="text-3xl text-fuchsia-700 font-semibold w-1/2">
                        See for yourself
                    </h2>
                    <h2 className="text-2xl text-neutral-500 font-semibold mt-1">
                        Patients and specialists share their experiences
                    </h2>
                </div>
                <div>
                    <Carousel
                        showStatus={false}
                        infiniteLoop={true}
                        showThumbs={false}
                    >
                        <div>img1</div>
                        <div>img2</div>
                    </Carousel>
                </div>
            </Frame>
        </Wall>
    );
}
