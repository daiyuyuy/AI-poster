import Pricing from "@/app/pricing/pricing";
import {getCurrentUser} from "@/lib/session";
import {UserInfo} from "@/types/user";

const tiers = [
    {
        name: 'LightTrial',
        id: 'tier-trial',
        href: '#',
        dataValue: `${process.env.LEMON_SQUEEZY_MEMBERSHIP_SINGLE_TIME_VARIANT_ID_1}`,
        priceMonthly: `$${Number(process.env.NEXT_PUBLIC_BOOST_PACK_PRICE_1)}`,
        description: `${process.env.NEXT_PUBLIC_BOOST_PACK_CREDITS_1} Image Credits.`,
        features: ['Upload your photo', 'Valid for 1 month', 'Fast generation', 'High quality images'],
        mostPopular: false,
    },
    {
        name: 'Startup',
        id: 'tier-startup',
        href: '#',
        dataValue: `${process.env.LEMON_SQUEEZY_MEMBERSHIP_SINGLE_TIME_VARIANT_ID_2}`,
        priceMonthly: `$${Number(process.env.NEXT_PUBLIC_BOOST_PACK_PRICE_2)}`,
        description: `${process.env.NEXT_PUBLIC_BOOST_PACK_CREDITS_2} Image Credits.`,
        features: ['Upload your photo', 'Valid for 2 month', 'Fast generation', 'High quality images'],
        mostPopular: true,
    },
    {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '#',
        dataValue: `${process.env.LEMON_SQUEEZY_MEMBERSHIP_SINGLE_TIME_VARIANT_ID_3}`,
        priceMonthly: `$${Number(process.env.NEXT_PUBLIC_BOOST_PACK_PRICE_3)}`,
        description: `${process.env.NEXT_PUBLIC_BOOST_PACK_CREDITS_3} Image Credits.`,
        features: ['Upload your photo', 'Valid for 3 month', 'Fast generation', 'High quality images'],
        mostPopular: false,
    },
]

export async function PricingPage() {
    const userinfo = (await getCurrentUser()) as UserInfo;
    // @ts-ignore
    return (
        <>
            <Pricing tiers={ tiers } user={userinfo}/>
        </>
    )
}

export default function Home() {
  return (
      PricingPage()
  )
}
