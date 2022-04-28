import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const AddVolunteerList = () => {
    const { register,handleSubmit  } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        const url = `http://localhost:5000/volunteerlist`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                navigate('/volunteerlist');
            })
    }
    return (
        < >
            <div className='p-10 bg-white  shadow-xl mx-auto' style={{ width: '700px' }}>
                <form className='mt-20' onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-2 justify-center gap-10'>
                        <div >
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                            <input type="text" {...register("name")} id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="" required />
                        </div>
                        <div >
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                            <input type="email" {...register("email")} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="" required />
                        </div>
                        <div >
                            <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Registration Date</label>
                            <input type="date" {...register("registration_date")} id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="" required />
                        </div>
                        <div>
                            <label for="volunteer-list" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Volunteer List</label>
                            <input type="text" {...register("volunteer_list")} id="volunteer-list" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="" required />
                        </div>
                    </div>
                    <div>
                        <input className='text-white bg-blue-700 font-medium rounded-lg text-sm px-32 py-2.5 text-center mb-3 mx-auto flex mt-3' type="submit" value="Add Volunteer list" />
                    </div>
                </form>

            </div>
        </ >
    );
};

export default AddVolunteerList;