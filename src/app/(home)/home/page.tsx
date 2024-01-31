'use client'
import Hero from "@/app/(home)/hero";
import FeatureSections from "@/app/(home)/FeatureSections";
import Pricing from "@/app/pricing/pricing";
import Faq from "@/app/(home)/faq";
import ImgGrid from "@/app/(home)/imgGrid";

export default function Home() {
    return (
        <>
            <Hero/>
            <ImgGrid/>
            <FeatureSections/>
            <Pricing/>
            <Faq/>
        </>
    );
}
