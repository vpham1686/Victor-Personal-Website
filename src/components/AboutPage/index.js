import React, { useState } from 'react';
import NavigationBar from '../NavigationBar';
import Sidebar from '../Sidebar';
import Footer from '../Footer'

import {

} from './AboutPageStyle';

const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <NavigationBar isOpen={isOpen} toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
        
            <Footer />
        </>
    );
};

export default About