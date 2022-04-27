import React, { useEffect, useState } from 'react';
import addEvent from '../../../logos/plus 1.png';
import volunteerList from '../../../logos/group-background-selected.png';
import bin from '../../../logos/trash-2 9.png';
import { useNavigate } from 'react-router-dom';
const Events = () => {
    const navigate = useNavigate();
    const navigateAddEvent = () => {
        navigate('/addevent');
    }
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data));
    }, []);
    return (
        <div className='flex'>
            <aside className="" aria-label="Sidebar" >
                <div className="overflow-y-auto py-4 px-3 bg-gray-100 rounded dark:bg-gray-800" style={{ height: '850px', width: '305px' }}>
                    <ul className="space-y-2">
                        <li>
                            <span className="flex items-center p-2 text-base font-normal text-sky-500 rounded-lg  hover:bg-gray-100 ">
                                <img src={volunteerList} alt="" className='w-8 h-8' />
                                <span className="ml-3 text-md font-medium">Volunteer register list</span>
                            </span>
                        </li>
                        <li>
                            <span className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
                                <button onClick={navigateAddEvent} className='flex  items-center'>
                                    <img src={addEvent} alt="" className='w-6 h-6' />
                                    <span className="ml-3 text-sm font-medium">Add Event</span>
                                </button>
                            </span>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className='flex  mt-10 mx-auto'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-20" style={{height:'80%'}}>
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
        </div>
    );
};

export default Events;