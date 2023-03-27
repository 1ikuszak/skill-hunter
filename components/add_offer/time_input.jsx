'use client'

export const TimeInput = () => {
    return(
        <>
        <div className='mb-6 flex flex-col w-[260px]'>
            <label className="mb-1 text-gray-700 text-m" htmlFor="time">
                Time
            </label>   
            <div class="flex">
                <span class="inline-flex items-center px-3 py-1 text-m text-gray-400 bg-light border border-gray-300 rounded">
                    <svg className="fill-gray-400" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM9.78 5H9.72C9.32 5 9 5.32 9 5.72V10.44C9 10.79 9.18 11.12 9.49 11.3L13.64 13.79C13.98 13.99 14.42 13.89 14.62 13.55C14.6702 13.469 14.7036 13.3788 14.7182 13.2846C14.7328 13.1905 14.7283 13.0943 14.705 13.002C14.6817 12.9096 14.64 12.8229 14.5824 12.7469C14.5249 12.671 14.4526 12.6074 14.37 12.56L10.5 10.26V5.72C10.5 5.32 10.18 5 9.78 5Z"/>
                    </svg>
                </span>
                <input type="number" name="time" id="time" class="w-full px-3 px-4 py-3 leading-tight text-gray-700 border border-transparent rounded bg-light focus:outline-none focus:bg-white focus:border-secondary placeholder:text-sm" placeholder="enter estimated time"/>
            </div>
        </div>
        </>
    )
}