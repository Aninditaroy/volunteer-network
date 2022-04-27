import React, { useEffect, useState } from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Volunteer from '../Volunteer/Volunteer';

const Volunteers = () => {
    const [volunteers] = useVolunteers();
    return (
        <div className="container lg:mx-auto xl:mx-auto 2xl:mx-auto md:mx-auto sm:mx-0 ">
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-3 mb-20'>
              {
                  volunteers.map(volunteer => <Volunteer 
                   key={volunteer._id}
                   volunteer={volunteer}
                  />)
              }
        </div>
    </div>
    );
};

export default Volunteers;