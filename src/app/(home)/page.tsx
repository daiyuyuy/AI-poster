'use client'
import Hero from "@/app/(home)/hero";
import FeatureSections from "@/app/(home)/FeatureSections";
import Pricing from "@/app/pricing/pricing";
import Faq from "@/app/(home)/faq";
import ImgGrid from "@/app/(home)/imgGrid";
import {getCurrentUser} from "@/lib/session";
import {UserInfo} from "@/types/user";
import {redirect} from "next/navigation";

export default async function Home() {
    const user = (await getCurrentUser()) as UserInfo;
    if (user?.username) {
        redirect('/apps')
    }
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
