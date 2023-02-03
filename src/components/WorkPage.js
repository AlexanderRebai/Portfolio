import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {darkTheme} from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import {Work} from '../data/WorkData';

const Box = styled.main`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Main = styled.ul`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vw;
  display: flex;

  color: ${props => props.theme.text};
`;

const WorkPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main>
          {Work.map ((item, index) => {
            return (
              <h1>workdata </h1>
            );
          })}
        </Main>

      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
