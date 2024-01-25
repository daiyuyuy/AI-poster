import Link from "next/link";

export default function Playground() {
    return (
        <div className="bg-white">
            <div className="pt-3 sm:-mt-2 max-w-6xl mx-auto">
                <div className="flex justify-center items-center flex-col bg-white pb-5">
                    <div
                        className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-xl shadow-lg my-6 transform transition duration-500 hover:scale-105">
                        <div
                            className="absolute top-0 right-0 px-3 py-1 bg-red-600 rounded-bl-xl text-white font-bold text-xs uppercase tracking-wider animate-pulse">
                            tips
                        </div>
                        <div className="text-center text-white mt-2">
                            <p className="mb-2 font-semibold">
                                If you wish to upload your own photos and transform your pets or
                                pictures into Disney Pixar style, please consider
                            </p>
                            <p className="inline-block mt-2 bg-white text-black font-bold py-1 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1">
                                <Link className="text-[blue] font-bold" href="/pricing">
                                    buy credits
                                </Link>
                            </p>
                        </div>
                    </div>
                    <main
                        className="flex min-h-screen h-full sm:flex-row justify-between bg-white w-full flex-col mx-2">
                        <div className="md:block lg:block sm:flex flex-row justify-start w-full sm:w-1/2">
                            <div className="mt-5 px-3">
                                <h2 className="text-xl font-semibold mb-4">Prompt suggestions</h2>
                                <div className="grid grid-cols-1 gap-2">
                                    <div className="bg-white rounded-lg border p-4">
                                        <p>
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            Disney AI Draw 'Milo's Magical Christmas': Illustrate a curious
                                            kitten exploring a snow-covered village, adorned with
                                            Christmas lights and decorations, radiating a warm, festive
                                            glow.
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-lg border p-4">
                                        <p>
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            Disney AI Draw 'Bella’s Winter Wonderland': Showcase a joyful
                                            rabbit hopping through a sparkling, snowy forest, with a
                                            backdrop of twinkling Christmas trees and a starry night
                                            sky.
                                        </p>
                                    </div>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <div className="bg-white rounded-lg border p-4">
                                        <p>
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            Disney AI Draw 'Oliver’s Christmas
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            Eve': Depict an adventurous owl perched atop a snow-laden
                                            tree, overlooking a quaint town bustling with Christmas Eve
                                            celebrations and colorful lights.
                                        </p>
                                    </div>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <div className="bg-white rounded-lg border p-4">
                                        <p>
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            Disney AI Draw 'Freddie’s Festive
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            Flight': Capture a spirited reindeer soaring above a winter
                                            landscape, pulling a sleigh filled with gifts, under a sky
                                            lit by the Northern Lights and Christmas stars.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-10 lg:mt-10 flex-col item-center justify-center w-full">
                            <iframe
                                src="https://openskyml-fast-sdxl-stable-diffusion-xl.hf.space"
                                // 可能某些空间设置了，不能被外部引用？有一说一，免费的空间，确实可以提供一些服务。
                                // src="https://huggingface.co/spaces/prodia/sdxl-stable-diffusion-xl"
                                // src="https://huggingface.co/spaces/google/sdxl"
                                frameBorder="0"
                                className=" min-h-[600px]"
                                width="100%"
                                height="100%"
                            ></iframe>
                        </div>
                    </main>
                    <div className="my-3 sm:max-w-[800px] px-3 w-full h-[90px]">
                        <ins
                            className="adsbygoogle adbanner-customize"
                            data-ad-client="ca-pub-3672455877501055"
                            data-ad-slot="9249157295"
                            data-ad-format="auto"
                            data-full-width-responsive="true"
                        ></ins>
                    </div>
                    <div className="mt-5 w-full px-3">
                        <h2 className="font-bold text-2xl">Character Generator</h2>
                        <div className="">
                            <h2 className="text-xl font-semibold mb-4 mt-4">
                                Usage suggestions
                            </h2>
                            <p>
                                Need inspiration for your Disney AI Character Posters? Use these
                                prompts to make the most of the character_name and
                                description_of_the_character fields:
                            </p>
                            <div className="mt-4 grid grid-rows-1 md:grid-rows-2 lg:grid-rows-4 gap-2 w-full">
                                <div className="bg-white rounded-lg border p-4">
                                    <p>
                                        Usage 1: Select character_name as “Mickey Mouse“ and describe
                                        his most adventurous journey.
                                    </p>
                                </div>
                                <div className="bg-white rounded-lg border p-4">
                                    <p>
                                        Usage 2: Choose character_name as “Elsa from Frozen“ and
                                        provide a vivid description of her using her ice powers.
                                    </p>
                                </div>
                                <div className="bg-white rounded-lg border p-4">
                                    <p>
                                        Usage 3: Opt for character_name “Simba“ from The Lion King and
                                        describe his path to becoming king of the Pride Lands.
                                    </p>
                                </div>
                                <div className="bg-white rounded-lg border p-4">
                                    <p>
                                        Usage 4: Invent your own Disney character by specifying
                                        character_name and provide a detailed description of their
                                        appearance and personality.
                                    </p>
                                </div>
                            </div>
                            <div className="text-xl font-semibold mt-4">
                                <h2>For Example </h2>
                            </div>
                            <div className="mt-4 bg-slate-50 pl-4 pr-4 pt-4 pb-4 text-slate-600">
                                <div className="font-semibold">
                                    character_name:<span className="text-blue-500"> Luu</span>
                                </div>
                                <div className="font-semibold">
                                    description_of_the_character:
                                    <span className="text-blue-600">
                  {" "}
                                        A cute and friendly Westie with a travel bag, boarding the
                  plane.
                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-3 sm:max-w-[800px] px-3 w-full h-[90px]">
                        <ins
                            className="adsbygoogle adbanner-customize"
                            data-ad-client="ca-pub-3672455877501055"
                            data-ad-slot="3146783377"
                            data-ad-format="auto"
                            data-full-width-responsive="true"
                        ></ins>
                    </div>
                    <div
                        className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-xl shadow-lg my-6 transform transition duration-500 hover:scale-105">
                        <div
                            className="absolute top-0 right-0 px-3 py-1 bg-red-600 rounded-bl-xl text-white font-bold text-xs uppercase tracking-wider animate-pulse">
                            tips
                        </div>
                        <div className="text-center text-white mt-2">
                            <p className="mb-2 font-semibold">
                                If you wish to upload your own photos and transform your pets or
                                pictures into Disney Pixar style, please consider
                            </p>
                            <p className="inline-block mt-2 bg-white text-black font-bold py-1 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1">
                                <Link className="text-[blue] font-bold" href="/pricing">
                                    buy credits
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 flex item-center justify-center w-full">
                        <iframe
                            className="w-full h-[750px]"
                            src="https://banbri-nvb.hf.space"
                            frameBorder="0"
                            width="100%"
                            height="100%"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
