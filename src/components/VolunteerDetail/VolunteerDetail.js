import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useVolunteerDetail from '../../hooks/useVolunteerDetail';

const VolunteerDetail = () => {
    const { volunteerId } = useParams();
    const [volunteers] = useVolunteerDetail(volunteerId);
    return (
        <div className='text-center mt-3'>
            <h2 className='mb-4'>You are about to book: {volunteers.name}</h2>
            <Link to={`/volunteers/${volunteerId}`}>
                <button className='text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'>
                    Proceed to checkout
                </button>
            </Link>
        </div>
    );
};

export default VolunteerDetail;