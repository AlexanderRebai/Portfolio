import React, {useEffect, useRef} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {darkTheme} from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import {Work} from '../data/WorkData';
import CardComponent from '../subComponents/CardComponent';
import {YinYang} from './AllSvgs';
import BigTitle from '../subComponents/BigTitle';
import {motion} from 'framer-motion';

const Box = styled.main`
  background-color: ${props => props.theme.body};
  height: calc(${props => props.itemSize}/3 * 60vw );
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled (motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vw;
  display: flex;

  color: ${props => props.theme.text};
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right:1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
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
    <ThemeProvider theme={darkTheme}>
      <Box itemSize={Work.length}>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <BigTitle text="Work" top="10%" right="20%" />

        <Main ref={ref} variants={container} initial="hidden" animate="show" >
          {Work.map ((item, index) => {
            return <CardComponent key={index} data={item} />;
          })}
        </Main>
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={darkTheme.text} />
        </Rotate>
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
