import React from 'react';

const Card = () => (
    <div className="w-80 bg-white drop-shadow-md rounded-lg">
        <div className="animate-pulse w-full h-56 bg-slate-200"></div>
        <div className="p-3 space-y-4">
            <div className="animate-pulse w-2/3 h-6 bg-slate-200"></div>
            <div className="flex space-x-4">
                {[1, 2, 3].map((_, index) => (
                    <div key={index} className="animate-pulse w-1/3 h-3 bg-sky-200"></div>
                ))}
            </div>
            <div className="space-y-2">
                {[1, 2, 3].map((_, index) => (
                    <div key={index} className="animate-pulse w-3/4 h-3 bg-slate-200"></div>
                ))}
            </div>
        </div>
    </div>
);

const BodyShimmer = () => {
    return (
        <div style={{ backgroundColor: '#3d3d3d' }}>
            <div className="px-5 pt-28">
                <form className="max-w-md mx-auto">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Restaurants...."
                            required
                        />
                        <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >Search</button>
                    </div>
                </form>
            </div>
            <div className="flex flex-wrap justify-center gap-10 p-10">
                {[...Array(10)].map((_, index) => (
                    <Card key={index} />
                ))}
            </div>
        </div>
    );
}

export default BodyShimmer;