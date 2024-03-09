'use client'
import Hero from "@/app/(home)/hero";
import FeatureSections from "@/app/(home)/FeatureSections";
import Faq from "@/app/(home)/faq";
import ImgGrid from "@/app/(home)/imgGrid";
import {getCurrentUser} from "@/lib/session";
import {UserInfo} from "@/types/user";
import {PricingPage} from "@/app/pricing/page";

export default async function Home() {
    const user = (await getCurrentUser()) as UserInfo;
    // if (user?.username) {
    //     redirect('/apps')
    // }
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
