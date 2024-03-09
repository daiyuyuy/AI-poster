'use client'
import Hero from "@/app/(home)/hero";
import FeatureSections from "@/app/(home)/FeatureSections";
import PricingPage from "@/app/pricing/page";
import Faq from "@/app/(home)/faq";
import ImgGrid from "@/app/(home)/imgGrid";

export default function Home() {
    return (
        <>
            <Hero/>
            <ImgGrid/>
            <FeatureSections/>
            <PricingPage />
            <Faq/>
        </>
    );
}
