import React, {useState, useEffect, lazy, Suspense} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';

import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';
import {Blogs} from '../data/BlogData';

import WorkComponent from './WorkComponent';
import Loading from '../subComponents/Loading';
import {mediaQueries} from './Themes';

const AnchorComponent = lazy (() =>
  import ('../subComponents/AnchorComponent.js')
);
const SocialIcons = lazy (() => import ('../subComponents/SocialIcons'));
const PowerButton = lazy (() => import ('../subComponents/PowerButton'));
const LogoComponent = lazy (() => import ('../subComponents/LogoComponent'));
const BigTitle = lazy (() => import ('../subComponents/BigTitle'));

const MainContainer = styled (motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Container = styled.div`
  background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
  
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;

  ${mediaQueries (30)`
    padding-top: 7rem;
  `};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);

  ${mediaQueries (50)`
    grid-template-columns: 100%;
  `};
`;

//Framer-motion configuration
const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.8,
    },
  },
};

const WorkPage = () => {
  const [numbers, setnumbers] = useState (0);

  useEffect (() => {
    let num = (window.innerHeight - 70) / 30;
    setnumbers (parseInt (num));
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <MainContainer
        variants={container}
        initial="hidden"
        animate="show"
        exit={{
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        }}
      >
        <Container>
          <LogoComponent />
          <PowerButton />
          <SocialIcons />
          <BigTitle text="Blog" top="5rem" left="5rem" />
          <AnchorComponent numbers={numbers} />
          <Center>
            <Grid>
              {Blogs.map ((blog, index) => {
                return <WorkComponent key={index} blog={blog} />;
              })}
            </Grid>
          </Center>
        </Container>
      </MainContainer>
    </Suspense>
  );
};

export default WorkPage;
