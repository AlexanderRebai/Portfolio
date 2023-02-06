import React from 'react';
import styled from 'styled-components';
import {darkTheme as DarkTheme, mediaQueries} from '../components/Themes';

const Logo = styled.div`
    display: inline-block;
    color: ${props => (props.color === 'dark' ? DarkTheme.text : DarkTheme.body)};
    font-family: 'Pacifico', cursive;

    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 3;

  ${mediaQueries (40)`
      font-size:1.5em;
      left:1rem;
      top:2rem;
  `};

`;

const LogoComponent = props => {
  return (
    <Logo color={props.theme}>
      Alexander.R.
    </Logo>
  );
};

export default LogoComponent;
