import React from 'react';
import {ThemeProvider} from 'styled-components';
import {lightTheme} from './Themes';
import styled from 'styled-components';
import {Design, Develop} from './AllSvgs';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle';
import {motion} from 'framer-motion';

const Box = styled (motion.main)`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover &{
    &>*{
      //fill because now the icon is also chnaging color
      fill: ${props => props.theme.body};
    }
  }

  &>*:first-child{
    margin-right: 1rem;
  }

`;

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover &{
      color: ${props => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul, p {
    margin-left: 2rem;
  }

`;

//framer-motion config
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

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box
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
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <BigTitle text="Skills" top="80%" right="30%" />

        <Main>
          <Title>
            <Design width={40} height={40} /> Designer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and simple.
          </Description>
          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>
                Web Design
              </li>
              <li>
                Mobile Apps
              </li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>
                Figma
              </li>

            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develop width={40} height={40} /> Frontend Developer
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>
              VScode, Github, Codepen etc.
            </p>
          </Description>
        </Main>
        {/* <BigTitle text="SKILLS" top="80%" right="30%" /> */}
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
