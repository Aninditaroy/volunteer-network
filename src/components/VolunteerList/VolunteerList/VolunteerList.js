import React, { useEffect, useState } from 'react';
import bin from '../../../logos/trash-2 9.png';
const VolunteerList = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/volunteerlist')
            .then(res => res.json())
            .then(data => setEvents(data));
    }, []);
    
    return (
       <>
        <div className='flex mt-10 mx-auto ml-10'>
            <div className="flex mx-auto shadow-md sm:rounded-lg " style={{ height: '100%' }}>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Registrating Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Volunteer list
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            events.map(event => <>
                                <tr key={event._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        {event.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {event.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {event.registration_date}
                                    </td>
                                    <td className="px-6 py-4">
                                        {event.volunteer_list}
                                    </td>
                                    <td className="px-6 py-4 text-right ">
                                        <button className=' bg-red-500 w-8 h-8 rounded'><img src={bin} alt="" className="w-6 h-6 flex mx-auto" /></button>
                                    </td>
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
       </>
    );
};

export default VolunteerList;