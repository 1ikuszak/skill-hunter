"use client";

var galleryWidth = 800
var uploadButtonWidth = 360

export const ImageGallery = () => {
    return (
    <div className={`flex flex-col w-[${galleryWidth}px]`}>
        <p className="text-gray-700 text-m">Image</p>
        <p className="text-gray-700 text-s">The first photo will be the main photo</p>
        
        <div className="flex gap-1">
            <div className="flex flex-col items-center justify-center flex-1 bg-light aspect-video">
                <p className="font-bold text-m">Hero Image</p>
                <p className="text-s">make this stand out the most</p>
            </div>
            <div className="flex flex-1 gap-1 aspect-video">
                <div className="flex flex-col flex-1 gap-1">
                    <div className="flex flex-1 aspect-video bg-light"></div>
                    <div className="flex flex-1 aspect-video bg-light"></div>
                </div>
                <div className="flex flex-col flex-1 gap-1">
                    <div className="flex flex-1 aspect-video bg-light"></div>
                    <div className="flex flex-1 aspect-video bg-light"></div>
                </div>
            </div>
        </div>

        <div className='flex items-end justify-end mt-3'>
            <input
                class={`w-[${uploadButtonWidth}px] text-sm cursor-pointer rounded border border-neutral-400 py-1 px-3 font-normal transition duration-200 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:border-0 file:border-solid file:border-inherit file:px-3 file:py-[0.32rem] file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-dark hover:file:bg-stone-600 focus:border-secondary focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none border-neutral-600 text-neutral-900 file:bg-neutral-700 file:text-neutral-100`}
                id="formFileLg"
                type="file"
                name="image_uploads"
                accept=".jpg, .jpeg, .png"
                multiple
            />
        </div>

    </div>
    )
}