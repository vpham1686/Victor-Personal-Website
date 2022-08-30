import React from 'react';
import { Squash as Hamburger } from 'hamburger-react'

//Icons
import Github from '../../assets/NavigationBarImages/GithubIcon.svg';
import Instagram from '../../assets/NavigationBarImages/InstagramIcon.svg';
import LinkedIn from '../../assets/NavigationBarImages/LinkedinIcon.svg';
import TikTok from '../../assets/NavigationBarImages/TiktokIcon.svg';

import {
    Nav, 
    NavbarContainer,  
    MobileIcon, 
    NavNav,
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
} from './NavigationBarStyle';

const Navbar = ({ isOpen, toggle }) => {
    return (
        
            <Nav className='/'>


                <NavbarContainer>

                    <MobileIcon onClick={toggle}>
                        <Hamburger color="#FFFFFF" rounded toggled={isOpen} toggle={toggle}/>
                    </MobileIcon>
                    <NavNav className="stroke">
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='/home'>Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/about'>About Me</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/projects'>Projects</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavNav>

                    
                    <NavBtn>
                    <a href='https://www.tiktok.com/@victpham?_t=8V7YqnEGT5R&_r=1' target="blank">
                        <img width="40px" style={{ paddingRight: '10px', zIndex: '10' }}
                            src={TikTok}>
                        </img>
                    </a>

                    <a href='https://www.instagram.com/vpham1686/' target="blank">
                        <img width="40px" style={{ paddingRight: '10px', zIndex: '10' }}
                            src={Instagram}>
                        </img>
                    </a>

                    <a href='https://github.com/vpham1686' target="blank">
                        <img width="37px" style={{ paddingRight: '10px', zIndex: '10' }}
                            src={Github}>
                        </img>
                    </a>

                    <a href='https://www.linkedin.com/in/victor-pham-vp0805/' target="blank">
                        <img width="40px" style={{ paddingRight: '10px', zIndex: '10' }}
                            src={LinkedIn}>
                        </img>
                    </a>
                    </NavBtn> 

                    <NavBtn>
                    <a href='https://drive.google.com/file/d/1RXGKoBsl_NR0cBplhjOZr8xNR750LFs2/view?usp=sharing' target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <NavBtnLink to='/sponsor-us' smooth={true} offset={-75}>Resume</NavBtnLink>
                    </a>
                    </NavBtn> 
                    
                </NavbarContainer>
            </Nav>
        
    );
};

export default Navbar