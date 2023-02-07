import {motion} from 'framer-motion';
import React, {useEffect, useRef, lazy, Suspense} from 'react';

import styled, {ThemeProvider} from 'styled-components';

import {YinYang} from './AllSvgs';
import {Work} from '../data/WorkData';
import {darkTheme, lightTheme, mediaQueries} from './Themes';

import CardComponent from '../subComponents/CardComponent';
import Loading from '../subComponents/Loading';

const SocialIcons = lazy (() => import ('../subComponents/SocialIcons'));
const PowerButton = lazy (() => import ('../subComponents/PowerButton'));
const LogoComponent = lazy (() => import ('../subComponents/LogoComponent'));
const BigTitle = lazy (() => import ('../subComponents/BigTitle'));

const Box = styled (motion.div)`
  background-color: ${props => props.theme.body};
  position: relative;
  display: flex;
  height: 400vh;
  align-items: center;

`;

const Main = styled (motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: ${props => props.theme.text};

  
  ${mediaQueries (50)`
    left:calc(8rem + 15vw);
  `};

  ${mediaQueries (40)`
    top: 30%;
    left:calc(6rem + 15vw);
  `};
  
  ${mediaQueries (25)`    
     left:calc(1rem + 15vw);
  `};

`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right:1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;

  ${mediaQueries (40)`
    width:60px;
    height:60px;   
    svg{
      width:60px;
      height:60px;
    }
  `};

  ${mediaQueries (25)`
    width:50px;
    height:50px;
    svg{
      width:50px;
      height:50px;
    }
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

const SkillsPage = () => {
  const ref = useRef (null);
  const yinyang = useRef (null);

  useEffect (() => {
    let element = ref.current;

    const ScrollSideways = () => {
      element.style.transform = `translateX(-${window.scrollY}px)`;
      yinyang.current.style.transform = `rotate(${window.scrollY}deg)`;
    };

    window.addEventListener ('scroll', ScrollSideways);
    return () => window.removeEventListener ('scroll', ScrollSideways);
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={darkTheme}>
        <Box
          itemSize={Work.length}
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
          <LogoComponent theme="dark" />
          <SocialIcons theme="dark" />
          <PowerButton />
          <BigTitle text="Skills" top="10%" right="20%" />

          <Main ref={ref}>
            {Work.map (item => (
              <CardComponent key={item.id} data={item} />
            ))}
          </Main>

          <Rotate ref={yinyang}>
            <YinYang width={80} height={80} fill={darkTheme.text} />
          </Rotate>
        </Box>
      </ThemeProvider>
    </Suspense>
  );
};

export default SkillsPage;
