import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useVolunteerDetail from '../../hooks/useVolunteerDetail';

const VolunteerDetail = () => {
    const { volunteerId } = useParams();
    const [volunteers] = useVolunteerDetail(volunteerId);
    return (
        <div className='text-center mt-3 mx-10'>
            <div class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={volunteers.img} alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pl-6">{volunteers.name}</h5>
                </div>
            </div>
        </div>
    );
};

export default VolunteerDetail;