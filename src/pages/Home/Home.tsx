import React from 'react';
import '../../App.css';
// @ts-ignore
import ParticleRing from "../../components/Animation"
import { SocialIcon } from 'react-social-icons';


function Home() {
  return (
    <div className="App">
      <div className="a100"><ParticleRing /> </div>
      <div className="begin-header">
        <h1 className="">Erik Lidman Hillbom</h1>
        <a className="white">19 years old from Stockholm Sweden. This is my coding story.</a>
        <div className="socialIcons">
            <SocialIcon style={{ height: 35, width: 35 }} bgColor="rgb(215 215 215)" url="https://linkedin.com/in/erik-lidman-hillbom" />
            <SocialIcon style={{ height: 35, width: 35 }} bgColor="rgb(215 215 215)" url="https://github.com/ErikLHillbom" />
        </div>
      </div>
      
    </div>
  );
}

export default Home;