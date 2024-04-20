import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from "react-scroll-progress-bar";

const Cloudone = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <ProgressBar bgcolor="#5EEAD3" />
            <div className='bg-gradient-to-r from-[#10172A] to-[#1a284d]'>
                <div className='container mx-auto px-5'>
                    <h1 className='text-white pt-10 text-3xl tracking-wider'>Company: Cloudone</h1>
                    <div className='text-xl text-white mt-8'>Projects</div>
                    <div className='grid grid-cols-12 mt-5'>
                        <div className='col-span-12 md:col-span-3'>
                            <div className='text-base text-white'>1. Cloudone Website</div>
                        </div>
                        <div className='col-span-12 md:col-span-9'>
                            <ul>
                                <li className='text-base text-blue-300'><Link to='http://www.cloudone.com.bd' target='_blank' rel='noopener noreferrer'>Click Here</Link></li>
                                <li className='text-base text-gray-400'>1. Worked on new UI.</li>
                                <li className='text-base text-gray-400'>2. Worked with responsiveness issue.</li>
                                <li className='text-base text-gray-400'>3. Worked in some new feature like pre-registration.</li>
                                <li className='text-base text-gray-400'>4. SEO Optimized with - Google tag manager, Google Console, G-tag Manager.</li>
                                <div className='flex flex-wrap pb-2'>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>HTML</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>CSS</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>JavaScript</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>JQuery</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>PHP</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>SEO</div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 mt-5'>
                        <div className='col-span-12 md:col-span-3'>
                            <div className='text-base text-white'>2. Expensy App</div>
                        </div>
                        <div className='col-span-12 md:col-span-9'>
                            <ul>
                                <li className='text-base text-gray-400'>1. UI designed with Figma.</li>
                                <li className='text-base text-gray-400'>2. Full App all screen design complete.</li>
                                <li className='text-base text-gray-400'>3. Redux impleted for state management.</li>
                                <li className='text-base text-gray-400'>4. Api Integration.</li>
                                <li className='text-base text-gray-400'>5. Worked with graph and pie chart.</li>
                                <li className='text-base text-gray-400'>6. Responsiveness for all sized mobile device and tab.</li>
                                <li className='text-base text-gray-400'>7. Compitable with IOS device.</li>
                                <div className='flex flex-wrap pb-2'>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>React Native</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Redux Toolkit</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Redux Thunk</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Async Storage</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Firebase</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>IOS</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Figma</div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 mt-5'>
                        <div className='col-span-12 md:col-span-3'>
                            <div className='text-base text-white'>3. Flight Website</div>
                        </div>
                        <div className='col-span-12 md:col-span-9'>
                            <ul>
                                <li className='text-base text-gray-400'>1. All Pages design completed.</li>
                                <li className='text-base text-gray-400'>2. Responsive webpage designed.</li>
                                <li className='text-base text-gray-400'>3. Data passed with props drilling.</li>
                                <li className='text-base text-gray-400'>4. Context API.</li>
                            </ul>
                            <div className='flex flex-wrap pb-2'>
                                <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Next Js</div>
                                <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>React-Hook-Form</div>
                                <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Tailwind</div>
                                <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Daisi Ui</div>
                                <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>CSR</div>
                                <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>SSR</div>
                                <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>SSG</div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 mt-5'>
                        <div className='col-span-12 md:col-span-3'>
                            <div className='text-base text-white'>4. Flight App</div>
                        </div>
                        <div className='col-span-12 md:col-span-9'>
                            <ul>
                                <li className='text-base text-gray-400'>1. Full App all screen design complete.</li>
                                <li className='text-base text-gray-400'>2. Redux impleted for state management.</li>
                                <li className='text-base text-gray-400'>3. Api Integration.</li>
                                <li className='text-base text-gray-400'>4. Responsiveness for all sized mobile device and tab.</li>
                                <div className='flex flex-wrap pb-2'>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>React Native</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Redux Toolkit</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Async Storage</div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 mt-5'>
                        <div className='col-span-12 md:col-span-3'>
                            <div className='text-base text-white'>5. Cloudone CRM</div>
                        </div>
                        <div className='col-span-12 md:col-span-9'>
                            <ul>
                                <li className='text-base text-gray-400'>1. Worked on different features and bug.</li>
                                <li className='text-base text-gray-400'>2. Integrated CRUD for new internet packages.</li>
                                <li className='text-base text-gray-400'>3. Data fast loading using data table indexing.</li>
                                <li className='text-base text-gray-400'>4. CRUD operation for Preregistration users' additional information.</li>
                                <div className='flex flex-wrap pb-2'>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>HTML</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>CSS</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>JavaScript</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>BootStrap</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>Php</div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 mt-5'>
                        <div className='col-span-12 md:col-span-3'>
                            <div className='text-base text-white'>6. Bayone Website</div>
                        </div>
                        <div className='col-span-12 md:col-span-9'>
                            <ul>
                                <li className='text-base text-blue-300'><Link to='https://bayone.com.bd' target='_blank' rel='noopener noreferrer'>Click Here</Link></li>
                                <li className='text-base text-gray-400'>1. Worked on UI update.</li>
                                <li className='text-base text-gray-400'>2. Converted the site static to dynamic.</li>
                                <li className='text-base text-gray-400'>3. Worked with the responsiveness for all devices.</li>
                                <div className='flex flex-wrap pb-2'>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>HTML</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>CSS</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>JavaScript</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>PHP</div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 mt-5'>
                        <div className='col-span-12 md:col-span-3'>
                            <div className='text-base text-white'>7. Karnafuly Website</div>
                        </div>
                        <div className='col-span-12 md:col-span-9'>
                            <ul>
                                <li className='text-base text-blue-300'><Link to='https://karnafulyexpress.com.bd' target='_blank' rel='noopener noreferrer'>Click Here</Link></li>
                                <li className='text-base text-gray-400'>1. Worked on UI update.</li>
                                <li className='text-base text-gray-400'>2. Converted the site static to dynamic.</li>
                                <li className='text-base text-gray-400'>3. Worked with the responsiveness for all devices.</li>
                                <div className='flex flex-wrap pb-2'>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>HTML</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>CSS</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>JavaScript</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>PHP</div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 mt-5 pb-16'>
                        <div className='col-span-12 md:col-span-3'>
                            <div className='text-base text-white'>8. Baroawlia Website</div>
                        </div>
                        <div className='col-span-12 md:col-span-9'>
                            <ul>
                                <li className='text-base text-blue-300'><Link to='https://baroawlia.com.bd' target='_blank' rel='noopener noreferrer'>Click Here</Link></li>
                                <li className='text-base text-gray-400'>1. Worked on UI update.</li>
                                <li className='text-base text-gray-400'>2. Converted the site static to dynamic.</li>
                                <li className='text-base text-gray-400'>3. Worked with the responsiveness for all devices.</li>
                                <div className='flex flex-wrap pb-2'>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>HTML</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>CSS</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>JavaScript</div>
                                    <div className='bg-[#5eead31a] text-[#5EEAD3] px-3 py-1 inline font-semibold rounded-full mr-2 mt-2 text-sm'>PHP</div>
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

export default Cloudone;