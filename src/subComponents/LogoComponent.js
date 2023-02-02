import React from 'react'
import styled from 'styled-components'
import { darkTheme as DarkTheme } from '../components/Themes'

const Logo = styled.div`
    display: inline-block;
    color: ${props => props.color === "dark" ? DarkTheme.text : DarkTheme.body};
    font-family: 'Pacifico', cursive;

    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 3;
`

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
        Alexander.R.
    </Logo>
  )
}

export default LogoComponent