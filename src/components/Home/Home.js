import React from 'react';
import './Home.css';
const Home = () => {
    return (
        <div className='mb-56'>
            <div className='home-img'>
                <h5 className='text-3xl text-center pt-40  font-bold'>I GROW BY HELPING PEOPLE IN NEED.</h5>
                <div className="flex items-center w-96 mx-auto mt-4">
                    <label for="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 mt-5" placeholder="" required="" />
                    </div>
                    <button type="submit" className="py-2.5 px-7 mt-5 text-sm font-medium text-white bg-blue-700  border border-blue-700 hover:bg-blue-800 rounded-r-md">Search</button>
                </div>
            </div>
            <section className=''>
                <div className="container lg:mx-auto xl:mx-auto 2xl:mx-auto md:mx-auto sm:mx-0">
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-3 mb-20'>

                        <div className="max-w-sm rounded-lg h-96 w-96 mt-10 mb-48">
                            <div className="bg-sky-300/80 rounded-t-3xl"><img className="" src="https://i.ibb.co/938QkBZ/child-Support.png" alt="" /></div>
                            <div className="p-5 bg-sky-300/80 text-center rounded-b-xl">
                                <h5 className="mb-2 text-xl font-bold text-slate-600">Child Support</h5>
                                <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700/90 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                    Book Volunteer
                                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;