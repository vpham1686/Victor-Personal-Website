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
import Preview from '../../assets/ProjectPageImages/WebsitePreview.png';


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
                            <br/>
                            <img style={{ width: '100%' }} src={Preview}></img>
                            <br/>
                            <p2>
                            This frontend software project was created for UBC Solar, an engineering design team at the University of British Columbia that designs and creates large sized solar-electric race cars. 
                            This software project has two components, the initial website, which was hosted from March to August and the current website, which has been up since the middle of August.                             
                            <br/><br/>
                            Joining my first university engineering design team, UBC Solar, in January of 2022. 
                            I was assigned a project the week after my interview for the team. 
                            The objective was to design the entire UBC Solar website using React, Javascript, HTML, and CSS. 
                            <br/><br/>
                            Throughout January and February, I spent time learning React and Javascript and working on smaller scale frontend software projects to practice. 
                            In March, we started gathering information from the public and team in regards to the desired website design while designing mockups of the website using Figma. 
                            We worked our way into programming the website around March. During this time, I had many midterm exams for my classes on top of my part time work which made it difficult to learn frontend programming. 
                            With enough time management and proper scheduling, I was able to start programming some components of the website that includes but is not limited to: navigation bars, hero sections, transitioning, and mobile compatibility. 
                            It took about three weeks to program the website, but there were many glitches and it was not at its full potential. 
                            <br/><br/>
                            We spent another week working on the website and fixing glitches mostly to do with the mobile compatibility which was not working correctly due to the component sizing and Apple phones would have the search bar change while scrolling. 
                            Many problems with the website had to do with poor programming practices and inefficient code. 
                            Eventually, we published and hosted a formal presentation to the entire design team for the website with plans to redesign an improved one by the end of August. 
                            <br/><br/>
                            After receiving a few emails regarding compatibility with different devices and functionality issues such as animation glitches, we decided to create an updated website again from scratch as making edits to the current website would not be efficient. 
                            Additionally, the team would be competing in our first official competition during the summer, so the competition itself was an incentive to revamp the website with updated and new content. 
                            <br/><br/>
                            Leading into UBC Solar's 2022 competition, I got appointed as the new business team lead for the design team. 
                            Transitioning into the team's lead position, I was also fully in charge of the maintenance and health of the UBC Solar website. 
                            Recruiting my own frontend software team, we worked over the summer to completely revamp the website, this time with the objective of making it more user-friendly, compatible across all devices, and improving the overall functionality. 
                            <br/><br/>
                            Throughout mid-July, Figma mockups were created for each page and we recycled some components of the original website such as the sponsorship section and navigation bar. 
                            Those two components were improved to be more compatible with other website components and devices. 
                            Everything else was designed and programmed from the very beginning. Once prototyping was complete, we started programming the website in late-July with the objective of having it completed by the middle of August, as UBC Solar's recruitment officially starts in late August. 
                            In order to keep the project timeline organized, I created a gantt chart to organize soft deadlines and objectives. 
                            While learning new programming techniques and practices, this took us longer than expected for some soft deadlines. In order to meet the project's hard deadline, we streamlined our efforts into focusing on functionality over unnecessary website aesthetic improvements. 
                            As a result, the completed website had little to no glitches by the time it was launched. 
                            <br/><br/>
                            The new revamped website was a success. 
                            Relative to the initial version, the second version had functioning animations, was more comprehensive, and user-friendly. 
                            As the website was launched in time for recruitment, it helped immensely with the team's marketing and improving the team's total recruitment application count in September. 
                            <br/><br/>
                            Although the project was a huge success, there are many improvements that can be made. 
                            As I am leading the frontend software team, we will have dedicated members focused on implementing a backend system for the website and increasing user engagement with the website. 
                            <br/>
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