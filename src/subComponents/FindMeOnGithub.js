import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Github} from '../components/AllSvgs';
import {NavLink} from 'react-router-dom';

const Container = styled (motion.div)`
    padding-top: 2rem;
    padding-bottom: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

//Framer-motion configuration
const container = {
  hidden: {scale: 0},
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.8,
    },
  },
};

const Git = styled (NavLink)`
    color: inherit;
    text-decoration: none;
    padding-left: 0.5rem;
`;

const WorkComponent = () => {
  return (
    <Container variants={container}>
        <Git to={{pathname: "https://github.com/AlexanderRebai?tab=repositories"}} target="_blank">
          <Github width={100} height={100} />
        </Git>
        More...
    </Container>
  );
};

export default WorkComponent;
