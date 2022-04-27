import React from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Volunteer from '../Volunteer/Volunteer';
import './Home.css';
const Home = () => {
    const [volunteers] = useVolunteers();
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
                        {
                            volunteers.slice(0,6).map(volunteer => <Volunteer
                                key={volunteer._id}
                                volunteer={volunteer}
                            />)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;