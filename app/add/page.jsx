import Image from 'next/image';
import upload from '../../public/upload.svg'

export default function Add() {
    return (
        <div className='max-w-[1120px] mx-auto my-12'>
            <p className='text-l'>Add Offer</p>
            <form className='bg-white p-12 rounded-xl'>
                <div className="w-[540px] mb-6">
                    <label className="text-gray-700 text-m mb-1" htmlFor="offer_name">
                        Name
                    </label>                    
                    <input className="appearance rounded bg-[#F2F4F5] w-full py-3 px-3 text-gray-700 border border-transparent rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-400  placeholder:text-sm" id="offer_name" type="text" placeholder="for ex. UI UX android app design"/>
                </div>
                <div className="flex gap-[80px]">
                    <div className="w-[289px]">
                        <label className="block text-gray-700 text-m mb-2" htmlFor="category">
                            Category
                        </label>                    
                        <div className="relative">
                            <select className="text-gray-500 block appearance-none w-full bg-[#F2F4F5] border border-transparent text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-400" name="category">
                                <option value="" disabled selected hidden>Chose category</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-[289px]">
                        <label className="block text-gray-700 text-m mb-2" htmlFor="sub-category">
                            Sub-Category
                        </label>                    
                        <div className="relative">
                            <select className="text-gray-500 block appearance-none w-full bg-[#F2F4F5] border border-transparent text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-400" name="sub-category">
                                <option value="" disabled selected hidden>Chose Sub-Category</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                                <option>E</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="h-px my-12 bg-[rgba(0,0,0,0.24)] border-0 m-[-48px]"/>

                <p className="text-gray-700 text-m">Image</p>
                <p className="text-gray-700 text-s">The first photo will be the main photo</p>
                
                <div className="flex w-[657px] gap-1">
                    <div className="bg-[#F2F4F5] flex-1 aspect-video flex flex-col justify-center items-center">
                        <p className="text-m font-bold">Hero Image</p>
                        <p className="text-s">make this stand out the most</p>
                    </div>
                    <div className="flex flex-1 aspect-video gap-1">
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

                <button className="flex justify-center items-center text-sm text-light font-bold mt-2 ml-[525px]">
                    <span className='bg-primary h-8 flex justify-center items-center px-3 rounded-l-lg'>
                        <Image
                            src={upload}
                        />
                    </span>
                    <span className='bg-secondary h-8 flex justify-center items-center px-6 rounded-r-lg'>upload</span>
                </button>

                <hr class="h-px my-12 bg-[rgba(0,0,0,0.24)] border-0 m-[-48px]"/>
    

                
                <label className="text-gray-700 text-m mb-1" htmlFor="description">
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
    )
}
