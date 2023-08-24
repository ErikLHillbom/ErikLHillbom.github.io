import React from 'react';
import '../../App.css';
import Experience from './sections/Experience';
import Front from "./sections/Front";
import Awards from "./sections/Awards"
import Education from "./sections/Education"
// @ts-ignore
import ParticleRing from "../../components/Animation"


function Turning_18() {
  return (
    <div className="App">
      <div className="a100"><ParticleRing /> </div>
      <Front />
      <Experience />
      <Awards />
      <Education />
    </div>
  );
}

export default Turning_18;
