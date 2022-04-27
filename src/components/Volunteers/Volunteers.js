import React from 'react';

const Volunteers = () => {
    return (
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
    );
};

export default Volunteers;