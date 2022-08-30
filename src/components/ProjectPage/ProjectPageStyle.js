import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { zoomIn } from 'react-animations';

const zoomInAnimation = keyframes`${zoomIn}`;

export const ZoomIn = styled.div`
  animation: 0.5s ${zoomInAnimation};
`;

export const ProjectContainer = styled.div`
    background: #09192D;
`;

export const ProjectHeroContainer = styled.div`
    height: calc(100vh - 60px);
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