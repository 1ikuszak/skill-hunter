"use client"

export const InputLarge = ({name, placeholder}) => {
    return(
        <>
        <div className={`w-[400px] mb-6 flex flex-col`}>
            <label className="mb-1 text-gray-700 text-m" htmlFor="name">
                {name}
            </label>                    
            <input className="appearance rounded bg-[#F2F4F5] py-3 px-3 text-gray-700 border border-transparent rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-secondary  placeholder:text-sm" id="name" name='name' type="text" placeholder={placeholder}/>
        </div>
        </>
    )
}
export const InputMedium = ({name, placeholder}) => {
    return(
        <>
        <div className={`w-[200px] mb-6 flex flex-col`}>
            <label className="mb-1 text-gray-700 text-m" htmlFor="name">
                {name}
            </label>                    
            <input className="appearance rounded bg-[#F2F4F5] py-3 px-3 text-gray-700 border border-transparent rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-secondary  placeholder:text-sm" id="name" name='name' type="text" placeholder={placeholder}/>
        </div>
        </>
    )
}
export const InputSmall = ({name, placeholder}) => {
    return(
        <>
        <div className={`w-[100px] mb-6 flex flex-col`}>
            <label className="mb-1 text-gray-700 text-m" htmlFor="name">
                {name}
            </label>                    
            <input className="appearance rounded bg-[#F2F4F5] py-3 px-3 text-gray-700 border border-transparent rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-secondary  placeholder:text-sm" id="name" name='name' type="text" placeholder={placeholder}/>
        </div>
        </>
    )
}