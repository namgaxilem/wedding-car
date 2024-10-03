"use client";
import { Banner } from "@/templates/Banner";
import { VerticalFeatures } from "@/templates/VerticalFeatures";
import HomeCarousel from "./_views/HomeCarousel";
import MainBanner from "./_views/MainBanner";
import SuggestService from "./_views/SuggestService";

export default function Home() {
  return (
    <>
      <MainBanner />
      <VerticalFeatures />
      <HomeCarousel />
      <Banner />
      <SuggestService />
    </>
  );
}
