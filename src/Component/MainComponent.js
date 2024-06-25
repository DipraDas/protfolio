import React, { useRef, useState } from 'react';
import LeftSide from './LeftSide';
import Right from './Right';
import 'react-h5-audio-player/lib/styles.css';
import ProgressBar from "react-scroll-progress-bar";

const MainComponent = () => {

    const [section, setSection] = useState('');
    const selectingSection = section => {
        setSection(section)
    }

    return (
        <div className='bg-gradient-to-r from-[#10172A] to-[#1a284d]'>
            <ProgressBar bgcolor="#5EEAD3" />
            <div className='container mx-auto px-5'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <LeftSide selectingSection={selectingSection} section={section} />
                    <Right section={section} />
                </div>
            </div>
        </div>
    );
};

export default MainComponent;