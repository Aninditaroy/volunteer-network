import React from 'react';

const Donation = () => {
    return (
        <div>
            <h2 className='text-center text-6xl font-bold text-blue-500 mt-10'>You can make a differernce</h2>
            <div className='mt-10'>
            <div class="flex mb-5 w-96 mx-auto">
                <p class="text-md ml-2 font-medium text-gray-900  mx-auto">Donation</p>
                <p class="text-md font-medium text-gray-500  text-center">376 donations</p>
            </div>
            </div>
            <div class="gap-8 sm:grid sm:grid-cols-2 mx-auto" style={{width: "750px"}}>
                <div>
                    <dl>
                        <dt class="text-sm font-medium text-gray-500 ">Helping Children</dt>
                        <dd class="flex items-center mb-3">
                            <div class="w-full bg-gray-200 rounded h-2.5  mr-2">
                                <div class="bg-blue-600 h-2.5 rounded " style={{width: "68%"}}></div>
                            </div>
                            <span class="text-sm font-medium text-gray-500 ">10,000</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt class="text-sm font-medium text-gray-500 ">Poor People</dt>
                        <dd class="flex items-center mb-3">
                            <div class="w-full bg-gray-200 rounded h-2.5  mr-2">
                                <div class="bg-blue-600 h-2.5 rounded " style={{width: "80%"}}></div>
                            </div>
                            <span class="text-sm font-medium text-gray-500">50,000</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt class="text-sm font-medium text-gray-500 ">Animal Rescue</dt>
                        <dd class="flex items-center mb-3">
                            <div class="w-full bg-gray-200 rounded h-2.5  mr-2">
                                <div class="bg-blue-600 h-2.5 rounded " style={{width: "68%"}}></div>
                            </div>
                            <span class="text-sm font-medium text-gray-500 ">5,000</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt class="text-sm font-medium text-gray-500 ">Knowledge for life</dt>
                        <dd class="flex items-center">
                            <div class="w-full bg-gray-200 rounded h-2.5  mr-2">
                                <div class="bg-blue-600 h-2.5 rounded " style={{width: "44%"}}></div>
                            </div>
                            <span class="text-sm font-medium text-gray-500 ">1000</span>
                        </dd>
                    </dl>
                </div>
                <div>
                    <dl>
                        <dt class="text-sm font-medium text-gray-500 ">Orphan care</dt>
                        <dd class="flex items-center mb-3">
                            <div class="w-full bg-gray-200 rounded h-2.5  mr-2">
                                <div class="bg-blue-600 h-2.5 rounded " style={{width: "89%"}}></div>
                            </div>
                            <span class="text-sm font-medium text-gray-500 ">80,000</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt class="text-sm font-medium text-gray-500 ">Food security</dt>
                        <dd class="flex items-center mb-3">
                            <div class="w-full bg-gray-200 rounded h-2.5  mr-2">
                                <div class="bg-blue-600 h-2.5 rounded " style={{width: "39%"}}></div>
                            </div>
                            <span class="text-sm font-medium text-gray-500 ">300</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt class="text-sm font-medium text-gray-500 ">Humanity first</dt>
                        <dd class="flex items-center">
                            <div class="w-full bg-gray-200 rounded h-2.5  mr-2">
                                <div class="bg-blue-600 h-2.5 rounded " style={{width: "59%"}}></div>
                            </div>
                            <span class="text-sm font-medium text-gray-500 ">18,900</span>
                        </dd>
                    </dl>
                </div>
            </div>

        </div>
    );
};

export default Donation;