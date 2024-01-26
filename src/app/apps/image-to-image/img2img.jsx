
export default function Img2img() {
    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8">
                <form>
                    <div className="space-y-12 max-w-6xl">
                        <div className="pb-12">
                            <div className="mt-10 flex flex-col sm:flex-row">
                                <div className="sm:w-1/2 flex flex-col gap-y-4">
                                    <div><label htmlFor="cover-photo"
                                                className="block text-sm font-medium leading-6 text-gray-900">Upload a
                                        picture</label>
                                        <div
                                            className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 h-[240px] relative">
                                            <div className="text-center px-6 py-10 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                     fill="currentColor" aria-hidden="true" data-slot="icon"
                                                     className="mx-auto h-12 w-12 text-gray-300">
                                                    <path fillRule="evenodd"
                                                          d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                                          clipRule="evenodd"></path>
                                                </svg>
                                                <div className="mt-4 flex text-sm leading-6 text-gray-600"><label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"><span>Upload a picture</span><input
                                                    id="file-upload" className="sr-only"
                                                    accept="image/jpeg, image/png, image/gif, image/webp, image/jpg"
                                                    type="file" name="file-upload"/></label></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div><label htmlFor="photo"
                                                className="block text-sm font-medium leading-6 text-gray-900">Category</label>
                                        <div className="mt-2 flex items-center gap-x-3">
                                            <div className="ant-list ant-list-split ant-list-grid css-dkbvqv">
                                                <div className="ant-spin-nested-loading css-dkbvqv">
                                                    <div className="ant-spin-container">
                                                        <div className="ant-row css-dkbvqv"
                                                             key="margin-left: -5px; margin-right: -5px;">
                                                            <div>
                                                                <div className="ant-col css-dkbvqv"
                                                                     key="padding-left: 5px; padding-right: 5px; flex: 1 1 auto;">
                                                                    <div className="ant-list-item">
                                                                        <div className="ant-image css-dkbvqv"
                                                                             key="width: 100px;"><img
                                                                            className="ant-image-img border-2 border-transparent cursor-pointer rounded-md css-dkbvqv"
                                                                            src="https://imgc.cc/2023/12/17/657f1163258b9.jpg"
                                                                            width="100"/></div>
                                                                        <div className="text-center w-full">None</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="ant-col css-dkbvqv"
                                                                     key="padding-left: 5px; padding-right: 5px; flex: 1 1 auto;">
                                                                    <div className="ant-list-item">
                                                                        <div className="ant-image css-dkbvqv"
                                                                             key="width: 100px;">
                                                                            <img className="ant-image-img border-2 border-indigo-600 cursor-pointer rounded-md css-dkbvqv"
                                                                            src="https://imgc.cc/2023/12/17/657f116390b97.jpg"
                                                                            width="100"/></div>
                                                                        <div className="text-center w-full">Disney
                                                                            Pixar
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="ant-col css-dkbvqv"
                                                                     key="padding-left: 5px; padding-right: 5px; flex: 1 1 auto;">
                                                                    <div className="ant-list-item">
                                                                        <div className="ant-image css-dkbvqv"
                                                                             key="width: 100px;"><img
                                                                            className="ant-image-img border-2 border-transparent cursor-pointer rounded-md css-dkbvqv"
                                                                            src="https://imgc.cc/2023/12/17/657f11638f1e3.jpg"
                                                                            width="100"/></div>
                                                                        <div className="text-center w-full">Christmas
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="ant-col css-dkbvqv"
                                                                     key="padding-left: 5px; padding-right: 5px; flex: 1 1 auto;">
                                                                    <div className="ant-list-item">
                                                                        <div className="ant-image css-dkbvqv"
                                                                             key="width: 100px;"><img
                                                                            className="ant-image-img border-2 border-transparent cursor-pointer rounded-md css-dkbvqv"
                                                                            src="https://imgc.cc/2023/12/17/657f116394c10.jpg"
                                                                            width="100"/></div>
                                                                        <div className="text-center w-full">Cartoon
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="ant-col css-dkbvqv"
                                                                     key="padding-left: 5px; padding-right: 5px; flex: 1 1 auto;">
                                                                    <div className="ant-list-item">
                                                                        <div className="ant-image css-dkbvqv"
                                                                             key="width: 100px;"><img
                                                                            className="ant-image-img border-2 border-transparent cursor-pointer rounded-md css-dkbvqv"
                                                                            src="https://imgc.cc/2023/12/17/657f11cf89b0c.jpg"
                                                                            width="100"/></div>
                                                                        <div className="text-center w-full">Comic</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div><label htmlFor="email"
                                                className="block text-sm font-medium leading-6 text-gray-900">Poster
                                        Title（Optional）</label>
                                        <div className="mt-2"><textarea
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                            required="" rows="1"
                                            placeholder="'Kal' at the top of the poster"></textarea></div>
                                    </div>
                                    <div><label htmlFor="email"
                                                className="block text-sm font-medium leading-6 text-gray-900">Prompt<span
                                        className="text-gray-400 font-normal">（Type what you want to generate）</span></label>
                                        <div className="mt-2"><textarea
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                            required="" rows="3">superman at the center and a destroyed city in the background.</textarea>
                                        </div>
                                    </div>
                                    <div><label htmlFor="email"
                                                className="block text-sm font-medium leading-6 text-gray-900">Negative
                                        Prompt<span className="text-gray-400 font-normal">（Type what you don't want to see）</span></label>
                                        <div className="mt-2"><input
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                            value="noisy, sloppy, messy, grainy, highly detailed, ultra textured, photo, NSFW"/>
                                        </div>
                                    </div>
                                    <div><label htmlFor="email"
                                                className="block text-sm font-medium leading-6 text-gray-900">Image
                                        Size</label>
                                        <div className="mt-2 flex gap-x-3">
                                            <div
                                                className="ant-select css-dkbvqv ant-select-single ant-select-show-arrow"
                                                key="width: 200px;">
                                                <div className="ant-select-selector"><span
                                                    className="ant-select-selection-search"><input autoComplete="off"
                                                                                                   className="ant-select-selection-search-input"
                                                                                                   role="combobox"
                                                                                                   aria-expanded="false"
                                                                                                   aria-haspopup="listbox"
                                                                                                   aria-owns="rc_select_0_list"
                                                                                                   aria-autocomplete="list"
                                                                                                   aria-controls="rc_select_0_list"
                                                                                                   readOnly=""
                                                                                                   unselectable="on"
                                                                                                   type="search"
                                                                                                   value=""
                                                                                                   id="rc_select_0"
                                                                                                   key="opacity: 0;"/></span><span
                                                    className="ant-select-selection-item"
                                                    title="Square HD">Square HD</span></div>
                                                <span className="ant-select-arrow" unselectable="on" aria-hidden="true"
                                                      key="user-select: none;"><span role="img" aria-label="down"
                                                                                       className="anticon anticon-down ant-select-suffix"><svg
                                                    viewBox="64 64 896 896" focusable="false" data-icon="down"
                                                    width="1em" height="1em" fill="currentColor" aria-hidden="true"><path
                                                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span></span>
                                            </div>
                                            <div className="flex gap-x-2 items-center">
                                                <div className="ant-input-number css-dkbvqv ant-input-number-disabled">
                                                    <div className="ant-input-number-handler-wrap"><span
                                                        unselectable="on" role="button" aria-label="Increase Value"
                                                        aria-disabled="true"
                                                        className="ant-input-number-handler ant-input-number-handler-up ant-input-number-handler-up-disabled"><span
                                                        role="img" aria-label="up"
                                                        className="anticon anticon-up ant-input-number-handler-up-inner"><svg
                                                        viewBox="64 64 896 896" focusable="false" data-icon="up"
                                                        width="1em" height="1em" fill="currentColor" aria-hidden="true"><path
                                                        d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path></svg></span></span><span
                                                        unselectable="on" role="button" aria-label="Decrease Value"
                                                        aria-disabled="false"
                                                        className="ant-input-number-handler ant-input-number-handler-down"><span
                                                        role="img" aria-label="down"
                                                        className="anticon anticon-down ant-input-number-handler-down-inner"><svg
                                                        viewBox="64 64 896 896" focusable="false" data-icon="down"
                                                        width="1em" height="1em" fill="currentColor" aria-hidden="true"><path
                                                        d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span></span>
                                                    </div>
                                                    <div className="ant-input-number-input-wrap"><input
                                                        autoComplete="off" role="spinbutton" aria-valuemin="100"
                                                        aria-valuemax="1024" aria-valuenow="1024" step="1"
                                                        className="ant-input-number-input" disabled="" value="1024"/>
                                                    </div>
                                                </div>
                                                <span className="font-bold text-xl">×</span>
                                                <div className="ant-input-number css-dkbvqv ant-input-number-disabled">
                                                    <div className="ant-input-number-handler-wrap"><span
                                                        unselectable="on" role="button" aria-label="Increase Value"
                                                        aria-disabled="true"
                                                        className="ant-input-number-handler ant-input-number-handler-up ant-input-number-handler-up-disabled"><span
                                                        role="img" aria-label="up"
                                                        className="anticon anticon-up ant-input-number-handler-up-inner"><svg
                                                        viewBox="64 64 896 896" focusable="false" data-icon="up"
                                                        width="1em" height="1em" fill="currentColor" aria-hidden="true"><path
                                                        d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path></svg></span></span><span
                                                        unselectable="on" role="button" aria-label="Decrease Value"
                                                        aria-disabled="false"
                                                        className="ant-input-number-handler ant-input-number-handler-down"><span
                                                        role="img" aria-label="down"
                                                        className="anticon anticon-down ant-input-number-handler-down-inner"><svg
                                                        viewBox="64 64 896 896" focusable="false" data-icon="down"
                                                        width="1em" height="1em" fill="currentColor" aria-hidden="true"><path
                                                        d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span></span>
                                                    </div>
                                                    <div className="ant-input-number-input-wrap"><input
                                                        autoComplete="off" role="spinbutton" aria-valuemin="100"
                                                        aria-valuemax="1024" aria-valuenow="1024" step="1"
                                                        className="ant-input-number-input" disabled="" value="1024"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            className="w-full px-0 py-2 text-black bg-white rounded-md focus:bg-blue-700 focus:outline-none cursor-pointer flex justify-between items-center">
                                            <span>Advanced Settings</span>
                                            <div className="flex flex-row items-center"><span
                                                className="transform duration-500"
                                                key="transform: rotate(90deg);">▼</span></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end gap-x-6 sm:col-span-4">
                                        <div className="flex-shrink-0 w-full">
                                            <button type="button"
                                                    className="ant-btn css-dkbvqv ant-btn-primary rounded-md w-full">
                                                <span>Run</span></button>
                                        </div>
                                    </div>
                                    <div className="text-center text-sm opacity-50 text-gray-700 my-0">Generating one
                                        image will consume 1 credit.
                                    </div>
                                </div>
                                <div className="sm:w-1/2 flex flex-col gap-y-4">
                                    <div className="sm:px-5 py-3 sm:py-0">
                                        <div><label htmlFor="cover-photo"
                                                    className="block text-sm font-medium leading-6 text-gray-900">Output&nbsp;</label>
                                            <div className="ant-spin-nested-loading css-dkbvqv">
                                                <div className="ant-spin-container">
                                                    <div
                                                        className="mt-2 flex justify-center items-center rounded-lg border border-dashed border-gray-900/25 min-h-[240px]">
                                                        <div className="opacity-50 h-[20px] text-[#1f2937]">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                                                 height="100%" viewBox="0 0 24 24" fill="none"
                                                                 stroke="currentColor" strokeWidth="1.5"
                                                                 strokeLinecap="round" strokeLinejoin="round"
                                                                 className="feather feather-image">
                                                                <rect x="3" y="3" width="18" height="18" rx="2"
                                                                      ry="2"></rect>
                                                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                                                <polyline points="21 15 16 10 5 21"></polyline>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative justify-end hidden">
                                        <button className="flex items-center bg-white py-2 px-3 rounded-full">
                                            <svg className="h-5 w-5" viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                      d="M13 20v-5.5c-5.556 0-8.222 1-11 5.5C2 13.25 5.222 8.625 13 7.5V2l9 9-9 9Z"></path>
                                            </svg>
                                            <span className="ml-2 text-sm font-medium">Share</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}