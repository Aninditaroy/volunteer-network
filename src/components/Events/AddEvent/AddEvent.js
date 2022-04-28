import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const AddEvent = () => {
    const { handleSubmit, register } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        const url = `http://localhost:5000/events`;
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
                navigate('/events');
            })
    }
    return (
        < >
            <div className='p-10 bg-white  shadow-xl mx-auto' style={{ width: '700px' }}>
                <form className='mt-20' onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-2 justify-center gap-10'>
                        <div >
                            <label for="event_title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Event Title</label>
                            <input type="text" {...register("event_title")} id="event_title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="" required />
                        </div>
                        <div >
                            <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Event Date</label>
                            <input type="date" {...register("event_date")} id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="" required />
                        </div>

                        <div >
                            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                            <textarea type="text" {...register("event_description")} id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="" required />
                        </div>
                        <div>
                            <label for="photo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Banner</label>
                            <input type="text" {...register("img")} id="photo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="Image URL" required />
                        </div>
                    </div>
                    <div>
                        <input className='text-white bg-blue-700 font-medium rounded-lg text-sm px-32 py-2.5 text-center mb-3 mx-auto flex mt-3' type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </ >
    );
};

export default AddEvent;