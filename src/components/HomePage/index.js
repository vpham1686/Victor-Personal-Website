import React, { useState, useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';
import VisibilitySensor from 'react-visibility-sensor';
import Popup from "reactjs-popup";
import Footer from '../Footer'

import './Home.css';

//Images
import Victor from '../../assets/HomePageImages/Victor.jpg';
import Website from '../../assets/ProjectPageImages/SolarWebsite.png';

import {
    HomeContainer,
    HomeHeroContainer,
    BiographyContainer,
    VictorBlurb,
    VictorImage,
    HomeProjectContainer,
    ProjectBackground,
    Project,
    ProjectImage,
    Modal,
    ZoomIn,
    SeeMoreLink,
    SeeMoreContainer,
    
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
                <HomeHeroContainer>
                    <BiographyContainer>
                        <VictorBlurb>
                            <h1>Victor Pham</h1>
                            <h2>Environmental Engineering Student</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </VictorBlurb>
                        <VictorImage
                            src={Victor}>
                        </VictorImage>
                    </BiographyContainer>
                </HomeHeroContainer>

                <HomeProjectContainer>

                    <Project>
                        <Popup
                        trigger={
                            <ProjectBackground>
                                    <ProjectImage 
                                        src={Website}>
                                    </ProjectImage>
                            </ProjectBackground>} 
                        modal>
   
                        {close => (
                        <ZoomIn>
                        <Modal>
                            <button
                                onClick={() => {
                                close();
                                }}>
                                X
                            </button>

                            <h3> UBC Solar Design Team - Website</h3>
                            <p2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
                            nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
                            quibusdam voluptates delectus doloremque, explicabo tempore dicta
                            adipisci fugit amet dignissimos?
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                            sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
                            repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
                            alias. Vitae?
                            </p2>
                        </Modal>
                        </ZoomIn>
                        )}
                    </Popup>
                        <h3>
                            UBC Solar Design Team - Website
                        </h3>
                        <p2>
                            Frontend Software Web Development, UI/UX
                        </p2>
                    </Project>
                    

                    <Project>
                        <Popup
                        trigger={
                            <ProjectBackground>
                                    <ProjectImage 
                                        src={Website}>
                                    </ProjectImage>
                            </ProjectBackground>} 
                        modal>
   
                        {close => (
                        <ZoomIn>
                        <Modal>
                            <button
                                onClick={() => {
                                close();
                                }}>
                                X
                            </button>

                            <h3> UBC Solar Design Team - Website</h3>
                            <p2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
                            nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
                            quibusdam voluptates delectus doloremque, explicabo tempore dicta
                            adipisci fugit amet dignissimos?
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                            sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
                            repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
                            alias. Vitae?
                            </p2>
                        </Modal>
                        </ZoomIn>
                        )}
                    </Popup>
                            <h3>
                                UBC Research - Biological Ion Exchange (BIEX)
                            </h3>
                            <p2>
                                Data Analysis, Quality Control, Experimental Development
                            </p2>
                    </Project>
                    
                </HomeProjectContainer>

                <SeeMoreContainer>
                    <SeeMoreLink to='/projects'>See More Projects</SeeMoreLink>
                </SeeMoreContainer>
                
            </HomeContainer>

            {/* <Footer /> */}
        </>
    );
};

export default HomePage