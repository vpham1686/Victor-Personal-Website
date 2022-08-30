import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { zoomIn } from 'react-animations';

const zoomInAnimation = keyframes`${zoomIn}`;

export const ZoomIn = styled.div`
  animation: 0.5s ${zoomInAnimation};
  
`;

export const HomeContainer = styled.div`
    background: #09192D;
`;

export const HomeHeroContainer = styled.div`

`;

export const BiographyContainer = styled.div`   
    display: grid;
    grid-template-columns: 60% 40%;
    height: calc(100vh - 60px);

`;

export const VictorBlurb = styled.div`
    width: 40vw;
    text-align: center;
    margin: auto;
`;

export const VictorImage = styled.img`
    width: 30vw;
    display: block;
    margin: auto;
    border-radius: 50px;
`;

export const HomeProjectContainer = styled.div`
    height: calc(95vh - 60px);
    display: grid;
    grid-template-columns: 50% 50%;
`;

export const Project = styled.div`
    margin: auto;
    text-align: center;
`;

export const ProjectBackground = styled.div`
    background: #2F3649;
    border-radius: 50px;
    width: 33vw;
    height: 33vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        transition: 0.4s;
        height: 35vw;
        width: 35vw;
    }
`;

export const ProjectImage = styled.img`
    max-width: 65%;

    ${ProjectBackground}:hover & {
        transition: 0.4s;
        max-width: 75%;
    }
`;

export const Modal = styled.div`
    width: 70vw;
    height: 80vh;
    background: rgba(20, 20, 20, 0.9);
    padding: 50px;
    overflow: auto;

    display: grid;
`;

export const SeeMoreLink = styled(LinkRouter)`
    color: #C0CDE9;
    position: absolute;
    right: 2vw;
    text-decoration: none;

    &:hover {
        transition: 0.4s;
        font-size: 17px;
}
`;

export const SeeMoreContainer = styled.div`
    height: calc(5vh);
    background: #09192D;
`;