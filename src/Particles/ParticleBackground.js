import React from 'react';
import Particles from "react-tsparticles";
import ParticlesConfig from './particle-config';

const ParticleBackground = () => {
    return (
       <Particles params={ParticlesConfig}></Particles>
    );
};

export default ParticleBackground;