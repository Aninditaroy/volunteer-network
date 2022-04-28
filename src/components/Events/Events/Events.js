import React, { useEffect, useState } from 'react';

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/events`;
        fetch(url)
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);
    return (
        <div className='mt-10 px-20 mx-auto'>
            <div className='grid grid-cols-2 gap-7'>
            {
                events.map(event => 
                    <div key={event._id} event={event}  class="flex items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100">
                        <img class="object-cover w-full h-96  md:h-auto md:w-48 m-2" src={event.img} alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-600 pl-6 text-center">{event.event_title}</h5>
                            <p className='text-center text-red-600 font-medium'>{event.event_date}</p>
                            <p className='text-center pl-4 text-md font-semibold'>{event.event_description}</p>
                            <br />
                            <button className='text-white bg-gray-400 hover:bg-gray-800 focus:ring-4  font-medium rounded-lg text-sm px-12 py-2 mb-2 ml-5'><span >Cancel</span></button>
                        </div>
                    </div>
               )
            }
             </div>
        </div>
    );
};

export default Events;