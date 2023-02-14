import React from 'react';
import styled from 'styled-components';
import {mediaQueries} from './Themes';
import {motion} from 'framer-motion';
import {Github} from '../components/AllSvgs';
import {NavLink} from 'react-router-dom';

const Box = styled (motion.div)`
    width: calc(10rem + 15vw);
    text-decoration: none;
    height: 20rem;
    padding: 1rem;
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
    backdrop-filter: blur(2px);
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);

    &:hover {
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.text};
        transition: all 0.3s ease;
    }

    display: flex;
    flex-direction: column;
    z-index: 5;

    ${mediaQueries (50)`
      width:calc(60vw);
    `};

    ${mediaQueries (30)`  
      height:18rem;
    `};

    ${mediaQueries (25)`
      height:14rem;
      padding:0.8rem;
      backdrop-filter: none;
    `};

`;

const Image = styled.div`
    background-image: url(${props => props.img});
    width: 100%;
    height: 60%;
    background-size: cover;
    border: 1px solid transparent;
    background-position: center center;

    ${Box}:hover &{
        border: 1px solid ${props => props.theme.body};
    }

    ${mediaQueries (25)`
        height:70%;
    `}

`;

const Title = styled.h3`
    color: inherit;
    padding: 0.5rem 0;
    padding-top: 1rem;
    font-family: 'Karla', sans-serif;
    font-weight: 700;
    border-bottom: 1px solid ${props => props.theme.text};

    ${Box}:hover &{
        border-bottom: 1px solid ${props => props.theme.body};
    }

    ${mediaQueries (40)`
      font-size:calc(0.8em + 1vw);
    `};

    ${mediaQueries (25)`
     font-size:calc(0.6em + 1vw);
    `};
`;

const HashTags = styled.div`
    padding: 0.5rem 0;
    display: flex;
    flex-wrap: wrap;

    ${mediaQueries (25)`
      font-size:calc(0.5em + 1vw);
    `};

`;

const HashTag = styled.span`
    padding-right: 0.5rem;
`;

const Container = styled (motion.div)``;

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

const Footer = styled.footer`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Link = styled (NavLink)`
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
    text-decoration: none;
    padding: 0.5rem calc(2rem + 2vw);
    font-size: calc(1em + 0.5vw);
    border-radius: 0.5rem;

    ${Box}:hover & {
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.text};
    }
`;

const Git = styled (NavLink)`
    color: inherit;
    text-decoration: none;
    padding-left: 0.5rem;

    ${Box}:hover & {
        &>* {
            fill: ${props => props.theme.body};
        }
    }
`;

const WorkComponent = props => {
  const {name, tags, imgSrc, link, gitlink} = props.work;

  return (
    <Container variants={container}>
      <Box >
        <Image img={require(`../assets/work-images/${imgSrc}`)} />
        <Title>{name}</Title>
        <HashTags>
          {tags.map ((tag, index) => {
            return <HashTag key={index}>#{tag}</HashTag>;
          })}
        </HashTags>
        <Footer>
          <Link to={{pathname: `${link != null ? link : gitlink}`}} target="_blank">
          {`${link != null ? "Visit": "Visit Github"}`}
          </Link>
          <Git to={{pathname: `${gitlink}`}} target="_blank">
            <Github width={40} height={40} />
          </Git>
        </Footer>
      </Box>
    </Container>
  );
};

export default WorkComponent;
