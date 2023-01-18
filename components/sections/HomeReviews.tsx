import React from "react";
import Wall from "../containers/Wall";
import Frame from "../containers/Frame";
import ReviewImage1 from "public/images/review-1.png";
import ReviewImage2 from "public/images/review-2.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Icon } from "@iconify/react";
import ReviewSlide from "../slides/ReviewSlide";

type Props = {};

export default function HomeReviews({}: Props) {
    const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);

    function next() {
        setCurrentImageIndex((prev) => (prev == 1 ? 1 : prev + 1));
    }

    function previous() {
        setCurrentImageIndex((prev) => (prev == 0 ? 0 : prev - 1));
    }

    return (
        <Wall>
            <Frame className="max-w-6xl mx-auto flex flex-col gap-4 md:gap-12 px-8 py-16
                            lg:px-12 lg:py-20">
                <div>
                    <h2 className="text-3xl text-fuchsia-700 font-semibold w-full lg:w-1/2">
                        See for yourself
                    </h2>
                    <h2 className="text-xl md:text-2xl text-neutral-500 font-semibold mt-1">
                        Patients and specialists share their experiences
                    </h2>
                </div>
                <div className="relative">
                    <button
                        onClick={() => previous()}
                        className="cursor-pointer"
                    >
                        <Icon
                            className={`text-6xl absolute z-30 top-[8rem] md:top-[14rem] left-0
                                ${
                                    currentImageIndex == 0
                                        ? "text-neutral-300"
                                        : "text-neutral-700"
                                }`}
                            icon="carbon:chevron-left"
                        />
                    </button>
                    <button onClick={() => next()} className="cursor-pointer">
                        <Icon
                            className={`text-6xl absolute z-30 top-[8rem] md:top-[14rem] right-0
                                    ${
                                        currentImageIndex == 1
                                            ? "text-neutral-300"
                                            : "text-neutral-700"
                                    }`}
                            icon="carbon:chevron-right"
                        />
                    </button>
                    <Carousel
                        selectedItem={currentImageIndex}
                        showStatus={false}
                        infiniteLoop={true}
                        showThumbs={false}
                        showArrows={false}
                        swipeable={false}
                    >
                        <ReviewSlide
                            imgSrc={ReviewImage1}
                            title="Professor Anjon Banerjee on kidney diseases"
                        />
                        <ReviewSlide
                            imgSrc={ReviewImage2}
                            title="Professor Tamannah Hossain interview"
                        />
                    </Carousel>
                </div>
            </Frame>
        </Wall>
    );
}
