import React from "react";
import HeroImg1 from "public/images/hero-1.png";
import HeroImg2 from "public/images/hero-2.png";
import HeroImg3 from "public/images/hero-3.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroSlide from "../slides/HeroSlide";

type Props = {};

export default function Hero({}: Props) {
    const images = [HeroImg1, HeroImg2, HeroImg3];
    return (
        <div className="h-[82vh]">
            <Carousel
                showStatus={false}
                showArrows={false}
                autoPlay={true}
                interval={5000}
                infiniteLoop={true}
                showThumbs={false}
                autoFocus={true}
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
        </div>
    );
}
