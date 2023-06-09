"use client";

export const InputLarge = ({name, placeholder}) => {
    return(
        <>
        <div className='w-[400px] mb-6 flex flex-col'>
            <label className="mb-1 text-gray-700 text-m" htmlFor="name">
                {name}
            </label>                    
            <input className="px-3 px-4 py-3 leading-tight text-gray-700 border border-transparent rounded bg-light focus:outline-none focus:bg-white focus:border-secondary placeholder:text-sm" id="name" name='name' type="text" placeholder={placeholder}/>
        </div>
        </>
    )
}
export const InputMedium = ({name, placeholder}) => {
    return(
        <>
        <div className='w-[200px] mb-6 flex flex-col'>
            <label className="mb-1 text-gray-700 text-m" htmlFor="name">
                {name}
            </label>                    
            <input className="px-3 px-4 py-3 leading-tight text-gray-700 border border-transparent rounded appearance bg-light focus:outline-none focus:bg-white focus:border-secondary placeholder:text-sm" id="name" name='name' type="text" placeholder={placeholder}/>
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
            <input className="px-3 px-4 py-3 leading-tight text-gray-700 border border-transparent rounded appearance bg-light focus:outline-none focus:bg-white focus:border-secondary placeholder:text-sm" id="name" name='name' type="text" placeholder={placeholder}/>
        </div>
        </>
    )
}