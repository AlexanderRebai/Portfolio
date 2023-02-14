import React, {lazy, Suspense} from 'react';
import {motion} from 'framer-motion';
import styled, {ThemeProvider} from 'styled-components';

import {darkTheme, mediaQueries} from './Themes';
import Loading from '../subComponents/Loading';

//Components with lazy loading
const SocialIcons = lazy (() => import ('../subComponents/SocialIcons'));
const PowerButton = lazy (() => import ('../subComponents/PowerButton'));
const LogoComponent = lazy (() => import ('../subComponents/LogoComponent'));
const BigTitle = lazy (() => import ('../subComponents/BigTitle'));
const ParticleComponent = lazy (() =>
  import ('../subComponents/ParticleComponent')
);

const Box = styled (motion.main)`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: scroll;
`;

const Main = styled (motion.div)`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: auto;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  &>* {
    margin-top: 2rem;
  }
  
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 10rem;

  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  ${mediaQueries (40)`
          width: 60vw;
          height: auto;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);


  `};
  ${mediaQueries (30)`
          width: 50vw;
          height: auto;
          backdrop-filter: none;
          margin-top:2rem;

  `};

${mediaQueries (20)`
          padding: 1rem;
          font-size: calc(0.5rem + 1vw);
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

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Suspense fallback={<Loading />}>
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
          <LogoComponent theme="dark" />
          <SocialIcons theme="dark" />
          <PowerButton />
          <ParticleComponent theme="dark" />
          <BigTitle text="About" top="8%" left="10%" />

          <Main>
            <p>
              Hi, I'm Alexander, a Fullstack developer based in the charming city of Gent. I hold a Bachelor's degree in Computer Science, which has equipped me with a solid foundation in software development.
            </p>
            <p>
              Beyond my technical skills, I am a simple and conscious person who approaches life with an open mind and a desire for self-discovery. To me, the essence of life is not determined by the number of things we accomplish, but by the level of presence we bring to each moment. I strive to live in the present and cherish every opportunity that comes my way.
            </p>
            <p>
              As a developer, I am passionate about creating intuitive and user-friendly applications that solve real-world problems. I approach each project with a curious  mindset, always seeking out new ways to push the boundaries of what is possible.
            </p>
          </Main>

        </Box>
      </Suspense>

    </ThemeProvider>
  );
};

export default AboutPage;
