import React from 'react';
import ProgressBar from "react-scroll-progress-bar";
import { Link } from 'react-router-dom';

const Dyfuso = () => {
    return (
        <>
            <ProgressBar bgcolor="#5EEAD3" />
            <div className='bg-gradient-to-r from-[#10172A] to-[#1a284d] h-screen'>
                <div className='container mx-auto'>
                    <h1 className='text-white pt-10 text-3xl tracking-wider'>Company: Dyfuso</h1>
                    <div className='text-xl text-white mt-8'>Projects</div>
                    <div className='grid grid-cols-12 mt-5'>
                        <div className='col-span-3'>
                            <div className='text-base text-white'>1. Kuuka Website</div>
                        </div>
                        <div className='col-span-9'>
                            <ul>
                                <li className='text-base text-blue-300'><Link to='https://kuuka.co.uk/' target='_blank' rel='noopener noreferrer'>Click Here</Link></li>
                                <li className='text-base text-gray-400'>1. Worked with new UI admin panel.</li>
                                <li className='text-base text-gray-400'>2. Worked with responsiveness issue.</li>
                                <li className='text-base text-gray-400'>3. API integration.</li>
                                <li className='text-base text-gray-400'>4. Vanila CSS design for all over the website.</li>
                                <div className='flex flex-wrap pb-2'>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Vue Js</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Quasar</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Vanilla CSS</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Api Integration</div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fixed bottom-10 right-10'>
                <Link to="/">
                    <h1 className='bg-[#5eead31a] text-[#5EEAD3] px-5 py-2 inline font-semibold rounded-lg mr-2 mt-2 text-base border border-white border-1'>BACK</h1>
                </Link>
            </div>
        </>
    );
};

export default Dyfuso;