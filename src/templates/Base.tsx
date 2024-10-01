"use client";
import HomeCarousel from "@/app/_views/HomeCarousel";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { VerticalFeatures } from "./VerticalFeatures";
import SuggestService from "@/app/_views/SuggestService";

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Hero />
    <VerticalFeatures />
    <HomeCarousel />
    <Banner />
    <SuggestService />
    <Footer />
  </div>
);

export { Base };
