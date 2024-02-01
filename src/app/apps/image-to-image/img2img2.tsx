'use client'

import {PhotoIcon, UserCircleIcon} from '@heroicons/react/24/solid'
import {Card1} from "@/components/card/card1";
import {useEffect, useRef, useState} from 'react'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid'
import {Combobox} from '@headlessui/react'
import axios from 'axios';


const dimension = [
    {name: 'Auto', height: 0, weight: 0},
    {name: 'Square', height: 512, weight: 512},
    {name: 'Square HD', height: 1024, weight: 1024},
    {name: 'Portrait 3:4', height: 768, weight: 1024},
    {name: 'Portrait 9:16', height: 576, weight: 512},
    {name: 'Landscape 4:3', height: 1024, weight: 720},
    {name: 'Landscape 16:9', height: 1024, weight: 576},
]

//@ts-ignore
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Img2img2({userInfo}) {
    const [selectedDimension, setSelectedDimension] = useState(dimension[2])
    const [formData, setFormData] = useState({
        "height": 0,
        "weight": 0,
        "prompt": "",
    })

    useEffect(() => {
        const heightInput = document.getElementById('d-height');
        const weightInput = document.getElementById('d-weight');
        // @ts-ignore
        heightInput.value = selectedDimension.height;
        // @ts-ignore
        weightInput.value = selectedDimension.weight;

    }, [selectedDimension]);

    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const inputFileRef = useRef<HTMLInputElement | null>(null);

    const downloadImage = (url: string) => {
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = 'image.jpg';
        anchor.click();
    };

    const handleSubmit = async () => {
        try {
            setIsLoading(true);
            /* Add files to FormData */
            const formData = new FormData();
            formData.append('userId', userInfo.userId)
            formData.append('weight', selectedDimension.weight)
            formData.append('height', selectedDimension.height)
            formData.append('prompt', document.getElementById('d-prompt')?.value)
            Object.values(inputFileRef.current.files).forEach(file => {
                formData.append('file', file);
            })
            const response = await axios.post('/api/imageMaker', formData);
            setImageUrl(response.data.image_url);
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    };

    return (
        <>
        <div className="flex">
            <div className="w-2/5 bg-white">
                <div  >
                    <div className="col-span-full mb-5">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Upload a picture</h2>
                        <div
                            className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true"/>
                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                        <span>Upload a picture</span>
                                        <input id="file-upload" name="file-upload" type="file" ref={inputFileRef} multiple className="sr-only"/>
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Category</h2>
                        <div className="bg-white flex">
                            <Card1 text={"Original"} src={"/image/nostyle.webp"} alt={""}/>
                            <Card1 text={"Disney"} src={"/image/disney-style.webp"} alt={""}/>
                            <Card1 text={"Christmas"} src={"/image/christmas-style.webp"} alt={""}/>
                            <Card1 text={"Cartoon"} src={"/image/cartoon-style.webp"} alt={""}/>
                            <Card1 text={"Comic"} src={"/image/comic-style.webp"} alt={""}/>
                        </div>
                    </div>

                    <div className="mt-3 mb-3">
                        <h3 className="text-base font-sans leading-7 text-gray-900">Prompt（Type what you want to
                            generate）</h3>
                        <div className="mt-2">
                                <textarea
                                    id="d-prompt"
                                    name="d-prompt"
                                    rows={3}
                                    className="block w-full rounded-md border-0 p-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={'Superman in the center and  destroyed city  in the background with title "Good Morning"'}
                                />
                        </div>

                        <div className="flex">
                            <div className="w-2/5 ">
                                <Combobox as="div" value={selectedDimension} onChange={setSelectedDimension}>
                                    <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">
                                        Image size
                                    </Combobox.Label>
                                    <div className="relative mt-2">
                                        <Combobox.Input
                                            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(event) => setSelectedDimension(event.target.value)}
                                            //@ts-ignore
                                            displayValue={(dimension_obj) => dimension_obj?.name}
                                        />
                                        <Combobox.Button
                                            className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400"
                                                               aria-hidden="true"/>
                                        </Combobox.Button>

                                        <Combobox.Options
                                            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {dimension.map((dimension) => (
                                                <Combobox.Option
                                                    key={dimension.name}
                                                    value={dimension}
                                                    className={({active}) =>
                                                        classNames(
                                                            'relative cursor-default select-none py-2 pl-3 pr-9',
                                                            active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                                        )
                                                    }
                                                >
                                                    {({active, selected}) => (
                                                        <>
                                                                <span
                                                                    className={classNames('block truncate', selected && 'font-semibold')}>{dimension.name}</span>

                                                            {selected && (
                                                                <span
                                                                    className={classNames(
                                                                        'absolute inset-y-0 right-0 flex items-center pr-4',
                                                                        active ? 'text-white' : 'text-indigo-600'
                                                                    )}
                                                                >
                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                                                  </span>
                                                            )}
                                                        </>
                                                    )}
                                                </Combobox.Option>
                                            ))}
                                        </Combobox.Options>
                                    </div>
                                </Combobox>
                            </div>

                            <div className="w-1/5 ml-2">
                                <label htmlFor=""
                                       className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                                    Height
                                </label>
                                <input
                                    type="number"
                                    name="d-height"
                                    id="d-height"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                                    defaultValue="1024"
                                />
                            </div>

                            <div className="w-1/5 ml-2">
                                <label htmlFor=""
                                       className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                                    Weight
                                </label>
                                <input
                                    type="number"
                                    name="d-weight"
                                    id="d-weight"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                                    defaultValue="1024"
                                />
                            </div>
                        </div>

                        <button onClick={() => handleSubmit()}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-5">
                            Run
                        </button>

                        <div className="text-center text-sm opacity-50 text-gray-700 my-0 mt-3">1 credit for 1 image</div>
                    </div>
                </div>
            </div>

            <div className="w-2/5 bg-white ml-10">
            <div className="col-span-full">
                        <label htmlFor="cover-photo"
                               className="block text-sm font-medium leading-6 text-gray-900">
                            Output
                        </label>
                        <div
                            className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                                {imageUrl ? (
                                    <div>
                                        <img src={imageUrl} alt="Downloaded Image"/>
                                        <button onClick={() => downloadImage(imageUrl)}>Download Image</button>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}