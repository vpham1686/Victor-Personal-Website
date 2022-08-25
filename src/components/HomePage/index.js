import React, { useState, useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';
import VisibilitySensor from 'react-visibility-sensor';
import Footer from '../Footer'

import {
    HomeContainer,
    HomeHeroContainer,
} from './HomePageStyle';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    //Parallax
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>

            <NavigationBar isOpen={isOpen} toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />

            <HomeContainer>
                <HomeHeroContainer style={{ transform: `translateY(${offsetY * 0.39}px)` }}>
                </HomeHeroContainer>
            </HomeContainer>

            <Footer />
        </>
    );
};

export default HomePage