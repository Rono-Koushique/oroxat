import React from "react";
import HeroImg1 from "public/images/hero-1.png";
import HeroImg2 from "public/images/hero-2.png";
import HeroImg3 from "public/images/hero-3.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroSlide from "../slides/HeroSlide";
import Wall from "../containers/Wall";
import Frame from "../containers/Frame";

type Props = {};

export default function Hero({}: Props) {
    const images = [HeroImg1, HeroImg2, HeroImg3];
    return (
        <Wall>
            <Frame className="h-fit lg:h-[82vh] w-full">
                {/* <HeroSlide
                    imgSrc={HeroImg2}
                    title="For adult patients with symptomatic anaemia of chronic kidney disease (CKD), OROXAT is like a breath of fresh air, at high altitude"
                /> */}
                <Carousel
                    showStatus={false}
                    showArrows={false}
                    autoPlay={true}
                    interval={5000}
                    infiniteLoop={true}
                    showThumbs={false}
                    autoFocus={true}
                    swipeable={false}
                >
                    <HeroSlide
                        imgSrc={HeroImg1}
                        title="Rise to the challenge of symptomatic anaemia of chronic kidney disease (CKD)"
                    />
                    <HeroSlide
                        imgSrc={HeroImg2}
                        title="For adult patients with symptomatic anaemia of chronic kidney disease (CKD), OROXAT is like a breath of fresh air, at high altitude"
                    />
                    <HeroSlide
                        imgSrc={HeroImg3}
                        title="A first-in-class HIF-PH inhibitor2 that mimics the body’s natural response to hypoxia"
                    />
                </Carousel>
            </Frame>
        </Wall>
    );
}
