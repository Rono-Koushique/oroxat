import React from "react";
import Wall from "../containers/Wall";
import VFrame from "../containers/VFrame";
import ReviewImage1 from "public/images/review-1.png";
import ReviewImage2 from "public/images/review-2.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Icon } from "@iconify/react";
import ReviewSlide from "../slides/ReviewSlide";
import SlideBtn from "../buttons/SlideBtn";

const slideInfo = [
    {
        imgSrc: ReviewImage1,
        title: "Professor Anjon Banerjee on kidney diseases",
    },
    {
        imgSrc: ReviewImage2,
        title: "Professor Tamannah Hossain interview",
    },
];

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
            <VFrame>
                <div className="content">
                    <h1>See for yourself</h1>
                    <h3 className="!mb-0">
                        Patients and specialists share their experiences
                    </h3>
                </div>
                <div className="relative h-fit">
                    <SlideBtn
                        prevBtnFunc={previous}
                        nextBtnFunc={next}
                        currentImageIndex={currentImageIndex}
                        count={slideInfo.length}
                    />
                    <Carousel
                        selectedItem={currentImageIndex}
                        showStatus={false}
                        infiniteLoop={true}
                        showThumbs={false}
                        showArrows={false}
                        swipeable={false}
                        showIndicators={false}
                    >
                        {slideInfo.map((info) => {
                            return (
                                <ReviewSlide
                                    className="!pb-0"
                                    key={info.title}
                                    imgSrc={info.imgSrc}
                                    title={info.title}
                                />
                            );
                        })}
                    </Carousel>
                </div>
            </VFrame>
        </Wall>
    );
}
