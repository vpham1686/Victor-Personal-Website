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

                </NavbarContainer>
            </Nav>
        
    );
};

export default Navbar