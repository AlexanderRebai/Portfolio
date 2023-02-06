import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';

import {Anchor, Link} from '../components/AllSvgs';
import {mediaQueries} from '../components/Themes';


const Container = styled.div`
    position: relative;

    ${mediaQueries(40)`
        display: none;
    `}
`;

const Slider = styled.div`
    position: fixed;
    top: 0;
    right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateY(-100%);

    .chain {
      transform: rotate(135deg);
    }
`;

const PreDisplay = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
`;

const AnchorComponent = props => {
  const ref = useRef (null);
  const hiddenRef = useRef (null);

  useEffect (() => {
    const handleScroll = () => {
      let scrollPosition = window.scrollY;
      //windowSize = the size of the viewed window in browser
      let windowSize = window.innerHeight;
      //bodyHeight = the height of the total body, also contains the hidden part
      let bodyHeight = document.body.offsetHeight;

      //we calculate the diff because we want to know how much of the body is hidden
      let diff = Math.max (bodyHeight - (windowSize + scrollPosition));
      //we calculate the diffPercentage because we want to know how much of the body is hidden in percentage
      let diffPercentage = diff * 100 / (bodyHeight - windowSize);

      ref.current.style.transform = `translateY(-${diffPercentage}%)`;

      if (scrollPosition > 5) {
        hiddenRef.current.style.display = 'none';
      } else {
        hiddenRef.current.style.display = 'block';
      }
    };

    window.addEventListener ('scroll', handleScroll);
    return () => window.removeEventListener ('scroll', handleScroll);
  }, []);

  return (
    <Container>
      <PreDisplay ref={hiddenRef} className="hidden">
        <Anchor width={70} height={70} fill="currentColor" />
      </PreDisplay>
      <Slider ref={ref}>
        {[...Array (props.numbers)].map ((item, index) => {
          return (
            <Link
              key={index}
              width={25}
              height={25}
              fill="currentColor"
              className="chain"
            />
          );
        })}
        <Anchor width={70} height={70} fill="currentColor" />
      </Slider>
    </Container>
  );
};

export default AnchorComponent;
