import React, {useCallback} from 'react';
import styled from 'styled-components';

import Particles from 'react-particles';
import {loadFull} from 'tsparticles';

//particle configs
import configDark from '../config/particlesjs-config.json';
import configLight from '../config/particlesjs-config-light.json';

const Box = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
`;

const ParticleComponent = props => {
  const particlesInit = useCallback (async engine => {
    console.log (engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull (engine);
  }, []);

  const particlesLoaded = useCallback (async container => {
    await console.log (container);
  }, []);

  return (
    <Box>
      <Particles
        id="tsparticles"
        style={{position: 'absolute', top: 0}}
        params={props.theme === 'light' ? configLight : configDark}
        init={particlesInit}
        loaded={particlesLoaded}
      />
    </Box>
  );
};

export default ParticleComponent;
