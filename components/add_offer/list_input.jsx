"use client";

export const ListInput = ({name, placeholder}) => {
    return(
        <div className="w-[240px]">
            <label className="mb-2 text-gray-700 text-m" htmlFor={name}>
                {name}
            </label>                    
            <div className="relative">
                <select className="z-10 w-full px-4 py-3 pr-8 leading-tight text-gray-500 text-gray-700 border border-transparent rounded appearance-none bg-light focus:outline-none focus:border-secondary" name={name} id={name}>
                    <option disabled selected hidden value={placeholder}>{placeholder}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
        </div>
    )
}