import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaGitlab } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const LeftSide = ({ selectingSection, section }) => {
    return (
        <div className='py-20 h-screen fixed'>
            <div className='flex flex-col justify-between h-full'>
                <div>
                    <h1 className='text-white text-5xl font-bold'>Dipra Das</h1>
                    <p className='mt-3 text-white text-2xl font-semibold'>Software Engineer at <span className='text-[#5EEAD3]'>Cloudone</span></p>
                    <p className='mt-3 text-gray-400 text-lg w-3/5'>I build accessible, inclusive products and digital experiences for the web.</p>
                </div>
                <div>
                    <div className='flex items-center gap-5 group mb-4' onClick={() => selectingSection('about')}>
                        <div className={`${section === 'about' ? 'w-16 bg-white' : 'w-10 bg-gray-500'} h-[1px]  transition-width duration-200 group-hover:w-16 group-hover:bg-white`} ></div>
                        <div className='text-white text-sm tracking-wider'>ABOUT</div>
                    </div>
                    <div className='flex items-center gap-5 group mb-4' onClick={() => selectingSection('experience')}>
                        <div className={`${section === 'experience' ? 'w-16 bg-white' : 'w-10 bg-gray-500'} h-[1px] bg-gray-500 transition-width duration-200 group-hover:w-16 group-hover:bg-white`} ></div>
                        <div className='text-white text-sm tracking-wider'>EXPERIENCE</div>
                    </div>
                    <div className='flex items-center gap-5 group mb-4' onClick={() => selectingSection('project')}>
                        <div className='w-10 h-[1px] bg-gray-500 transition-width duration-200 group-hover:w-20  group-hover:bg-white' ></div>
                        <div className='text-white text-sm tracking-wider'>PROJECTS</div>
                    </div>
                    <div className='flex items-center gap-5 group mb-4' onClick={() => selectingSection('education')}>
                        <div className={`${section === 'education' ? 'w-16 bg-white' : 'w-10 bg-gray-500'} h-[1px] bg-gray-500 transition-width duration-200 group-hover:w-16 group-hover:bg-white`} ></div>
                        <div className='text-white text-sm tracking-wider'>EDUCATION</div>
                    </div>
                    <div className='flex items-center gap-5 group mb-4' onClick={() => selectingSection('skill')}>
                        <div className={`${section === 'skill' ? 'w-16 bg-white' : 'w-10 bg-gray-500'} h-[1px] bg-gray-500 transition-width duration-200 group-hover:w-16 group-hover:bg-white`} ></div>
                        <div className='text-white text-sm tracking-wider'>SKILL</div>
                    </div>
                </div>
                <div className='flex gap-6'>
                    <Link to='https://github.com/DipraDas'>
                        <FaGithub className='text-gray-400 text-2xl hover:text-white' />
                    </Link>
                    <Link to='https://gitlab.com/Dipra5940'>
                        <FaGitlab className='text-gray-400 text-2xl hover:text-white' />
                    </Link>
                    <Link to='https://www.linkedin.com/in/dipra-das5940/'>
                        <BsLinkedin className='text-gray-400 text-2xl hover:text-white' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LeftSide;