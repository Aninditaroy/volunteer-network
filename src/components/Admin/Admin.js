import React from 'react';
import { Link } from 'react-router-dom';
import addEvent from '../../../src/logos/plus 1.png';
import volunteerListGroupPic from '../../../src/logos/group-background-selected.png';
import addVolunter from '../../../src/logos/icons8-welfare-40.png';
const Admin = () => {
    return (
        <div className='flex'>
            <aside className="" aria-label="Sidebar" >
                <div className="overflow-y-auto py-4 px-3 bg-gray-100 rounded dark:bg-gray-800" style={{ height: '850px', width: '305px' }}>
                    <ul className="space-y-2">
                        <li>
                            <Link as={Link} to='/volunteerlist' className="flex items-center p-2 text-base font-normal text-black rounded-lg  hover:text-sky-500 ">
                                <img src={volunteerListGroupPic} alt="" className='w-8 h-8' />
                                <span className="ml-3 text-md font-medium">Volunteer register list</span>
                            </Link>
                        </li>
                        <li>
                            <span className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
                                <Link as={Link} to='/addvolunteerlist' className='flex items-center text-base font-normal text-black rounded-lg  hover:text-sky-500'>
                                    <img src={addVolunter} alt="" className='w-8 h-8' />
                                    <span className="ml-3 text-md font-medium">Add Volunteer List</span>
                                </Link>
                            </span>
                        </li>
                        <li>
                            <span className="flex items-center  text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
                                <Link as={Link} to='/addevent' className='flex items-center p-2 text-base font-normal text-black rounded-lg  hover:text-sky-500'>
                                    <img src={addEvent} alt="" className='w-8 h-8' />
                                    <span className="ml-3 text-md font-medium">Add Event</span>
                                </Link>
                            </span>
                        </li>
                        <li>
                            <span className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
                                <Link as={Link} to='/addvolunteer' className='flex items-center text-base font-normal text-black rounded-lg  hover:text-sky-500'>
                                    <img src={addVolunter} alt="" className='w-8 h-8' />
                                    <span className="ml-3 text-md font-medium">Add Volunteer</span>
                                </Link>
                            </span>
                        </li>

                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default Admin;