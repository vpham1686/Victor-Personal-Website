import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { zoomIn } from 'react-animations';
import Hero from '../../assets/ProjectPageImages/ProjectHero.png';

const zoomInAnimation = keyframes`${zoomIn}`;

export const ZoomIn = styled.div`
  animation: 0.5s ${zoomInAnimation};
`;

export const ProjectContainer = styled.div`
    background: #09192D;
`;

//First Slide
export const ProjectHeroContainer = styled.div`
    height: calc(100vh - 60px);
    background: #09192D;
`;

export const TextContainer = styled.div`
    height: auto;
    width: auto;
    background: #09192D;
    opacity: 0.5;
    padding-bottom: 30px;
    padding-left: 30px;
    padding-right: 30px;

    //2.5 for three step animation
    animation: change-textbackground-color-in 1.5s;
    
    @keyframes change-textbackground-color-in {
        0% {
            background: none;
            opacity: 1;
        }
        50% {
            background: none;
            opacity: 1;
        }
        75% {
            background: none;
            opacity: 1;
        100% {
            background: #09192D;
            opacity: 0.5;       
        }
      }
`;

export const Layer1 = styled.div`
    height: calc(100vh - 60px);
    align-items: center;
    display: flex;
    justify-content: center;

    background-image: url(${Hero});
    animation: color-me-in 2.5s;

    @keyframes color-me-in {
        0% {
            background: #09192D;
            opacity: 0;
        }
        30% {
            background: #09192D;
            opacity: 0;
        }
        100% {
            background-image: url(${Hero});
            opacity: 1;
        }
      }
`;

export const ProjectProjectContainer = styled.div`
    height: calc(100vh - 60px);
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