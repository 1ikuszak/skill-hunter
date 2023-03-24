"use client"

export default function Form() {
    return (
        <>
        <div className='max-w-[1120px] mx-auto my-12'>
            <p className='text-l'>Add Offer</p>
            <form className='p-12 bg-white rounded-xl'>
                <div className="w-[540px] mb-6">
                    <label className="mb-1 text-gray-700 text-m" htmlFor="offer_name">
                        Name
                    </label>                    
                    <input className="appearance rounded bg-[#F2F4F5] w-full py-3 px-3 text-gray-700 border border-transparent rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-400  placeholder:text-sm" id="offer_name" name='offer_name' type="text" placeholder="for ex. UI UX android app design"/>
                </div>
                <div className="flex gap-[80px]">
                    <div className="w-[289px]">
                        <label className="block mb-2 text-gray-700 text-m" htmlFor="category">
                            Category
                        </label>                    
                        <div className="relative">
                            <select className="text-gray-500 block appearance-none w-full bg-[#F2F4F5] border border-transparent text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-400" name="category" id='category'>
                                <option defaultValue="" disabled selected hidden>Chose category</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-[289px]">
                        <label className="block mb-2 text-gray-700 text-m" htmlFor="sub-category">
                            Sub-Category
                        </label>                    
                        <div className="relative">
                            <select className="text-gray-500 block appearance-none w-full bg-[#F2F4F5] border border-transparent text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-400" name="sub-category" id='sub-category'>
                                <option defaultValue="" disabled selected hidden>Chose Sub-Category</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                                <option>E</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="h-px my-12 bg-[rgba(0,0,0,0.24)] border-0 m-[-48px]"/>

                <div className='flex flex-col bg-red-100 w-[800px]'>
                    <p className="text-gray-700 text-m">Image</p>
                    <p className="text-gray-700 text-s">The first photo will be the main photo</p>
                    
                    <div className="flex gap-1">
                        <div className="bg-[#F2F4F5] flex-1 aspect-video flex flex-col justify-center items-center">
                            <p className="font-bold text-m">Hero Image</p>
                            <p className="text-s">make this stand out the most</p>
                        </div>
                        <div className="flex flex-1 gap-1 aspect-video">
                                <div className="flex flex-col flex-1 gap-1">
                                    <div className="flex flex-1 aspect-video bg-[#F2F4F5]"></div>
                                    <div className="flex flex-1 aspect-video bg-[#F2F4F5]"></div>
                                </div>
                                <div className="flex flex-col flex-1 gap-1">
                                    <div className="flex flex-1 aspect-video bg-[#F2F4F5]"></div>
                                    <div className="flex flex-1 aspect-video bg-[#F2F4F5]"></div>
                                </div>
                        </div>
                    </div>

                    <div className='flex items-end justify-end w-[400px]'>
                        <input
                            class="relative m-0 min-w-0 cursor-pointer rounded border border-solid border-neutral-300 py-1 px-3 font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
                            id="formFileLg"
                            type="file" />
                    </div>

                </div>


                <hr class="h-px my-12 bg-[rgba(0,0,0,0.24)] border-0 m-[-48px]"/>
    

                
                <label className="mb-1 text-gray-700 text-m" htmlFor="description">
                    Description
                </label>             
                <textarea id="description" name='description' rows="8" class="mb-6 block p-2.5 w-[657px] text-sm text-gray-900 bg-[#F2F4F5] rounded-lg border border-transparent focus:outline-none focus:bg-white focus:border-gray-400" placeholder="List the most important information about your service"></textarea>


                <div className="w-[657px] mb-6">
                    <label className="text-gray-700 text-m" htmlFor="short_description">
                        Short Description
                    </label>                    
                    <input className="appearance rounded bg-[#F2F4F5] w-full py-3 px-3 text-gray-700 border border-transparent rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-400  placeholder:text-sm" name='short_description' id="short_description" type="text" placeholder="write short headline for your offer"/>
                </div>

                <hr class="h-px my-12 bg-[rgba(0,0,0,0.24)] border-0 m-[-48px]"/>
                
                <div className='flex gap-[84px]'>
                    <div className="w-[285px]">
                        <label className="text-gray-700 text-m" htmlFor="delivery_time">
                            product delivery time
                        </label>                    
                        <input className="appearance rounded bg-[#F2F4F5] w-full py-3 px-3 text-gray-700 border border-transparent rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-400  placeholder:text-sm" name='delivery_time' id="delivery_time" type="text" placeholder="provide deadline"/>
                    </div>
                    <div className="w-[285px]">
                        <label className="text-gray-700 text-m" htmlFor="delivery_time">
                            Price
                        </label>                    
                        <input className="appearance rounded bg-[#F2F4F5] w-full py-3 px-3 text-gray-700 border border-transparent rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-400  placeholder:text-sm" name='delivery_time' id="delivery_time" type="text" placeholder="enter price for your service $"/>
                    </div>
                </div>


            </form>
        </div>
        </>
    )
}