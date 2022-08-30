import React, { useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Sidebar from '../../components/Sidebar';
import VisibilitySensor from 'react-visibility-sensor';
import Popup from "reactjs-popup";
import Footer from '../Footer'

//Images
import Website from '../../assets/ProjectPageImages/SolarWebsite.png';

import {
    ProjectContainer,
    ProjectHeroContainer,
    ProjectProjectContainer,
    ProjectBackground,
    Project,
    ProjectImage,
    Modal,
    ZoomIn,
    SeeMoreLink,

} from './ProjectPageStyle';

const ProjectPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <NavigationBar isOpen={isOpen} toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
        
            <ProjectContainer>
                <ProjectHeroContainer>

                </ProjectHeroContainer>

                <ProjectProjectContainer>

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
                    
                </ProjectProjectContainer>

                <ProjectProjectContainer>

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

                </ProjectProjectContainer>

                
            </ProjectContainer>
            {/* <Footer /> */}
        </>
    );
};

export default ProjectPage