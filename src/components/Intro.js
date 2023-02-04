import React from 'react';
import styled from 'styled-components';
import Me from '../assets/Images/profile-img.png';
import {motion} from 'framer-motion';

const Box = styled (motion.div)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 65vw;
    height: 55vh;
    display: flex;

    //the linear-gradient will create a 2 colored box
    background: linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) bottom,
        linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};

    z-index: 1;
`;

const SubBox = styled.div`
    width: 50%;
    position: relative;
    display: flex;

    .pic {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0%);
        width: 100%;
        height: auto;
    }
`;

const Text = styled.div`
    font-size: calc(1rem + 1.5vw);
    color: ${props => props.theme.body};
    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &>*:last-child{
        color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
        font-size: calc(0.5rem + 1.5vw);
        font-weight: 300;
    }
`;

const Intro = () => {
  return (
    <Box
      initial={{height: 0}}
      animate={{height: '55vh'}}
      transition={{type: 'spring', duration: 2, delay: 1}}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h2>I'm Alexander Rebai.</h2>
          <h6>
            Full Stack Developer with a passion for Machine Learning.
          </h6>
        </Text>
      </SubBox>
      <SubBox>
      
      </SubBox>
    </Box>
  );
};

export default Intro;
