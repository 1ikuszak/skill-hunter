'use client'

export const FullDescription = () =>{
    return (
    <>
        <label className="mb-1 text-gray-700 text-m" htmlFor="description">
            Description
        </label>             
        <textarea id="description" name="description" rows="12" class="resize-none mb-6 block p-2.5 w-[657px] text-sm text-gray-900 bg-[#F2F4F5] rounded-lg border border-transparent focus:outline-none focus:bg-white focus:border-secondary" placeholder="List the most important information about your service"></textarea>
    </>
)}