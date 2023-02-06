import React from 'react';
import styled from 'styled-components';
import {mediaQueries} from './Themes';
import {motion} from 'framer-motion';

const Box = styled (motion.a)`
    width: calc(10rem + 15vw);
    text-decoration: none;
    height: 20rem;
    padding: 1rem;
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
    backdrop-filter: blur(2px);
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);

    cursor: pointer;
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

    ${mediaQueries (25)`
      font-size:calc(0.5em + 1vw);
    `};

`;

const HashTag = styled.span`
    padding-right: 0.5rem;
`;

const Date = styled.span`
    padding:0.5rem 0;

    ${mediaQueries (25)`
      font-size:calc(0.5em + 1vw);
    `};
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

const BlogComponent = props => {
  const {name, tags, date, imgSrc, link} = props.blog;

  return (
    <Container variants={container}>
      <Box to="/">
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <HashTags>
          {tags.map ((tag, index) => {
            return <HashTag key={index}>#{tag}</HashTag>;
          })}
        </HashTags>
        <Date>{date}</Date>
      </Box>
    </Container>
  );
};

export default BlogComponent;
