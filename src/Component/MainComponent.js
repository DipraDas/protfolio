import React, { useState } from 'react';
import LeftSide from './LeftSide';
import Right from './Right';

const MainComponent = () => {
    const [section, setSection] = useState('');
    const selectingSection = section => {
        setSection(section)
    }
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-2'>
                <LeftSide selectingSection={selectingSection} section={section}/>
                <Right section={section}/>
            </div>
        </div>
    );
};

export default MainComponent;