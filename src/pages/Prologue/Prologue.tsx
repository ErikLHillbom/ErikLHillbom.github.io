import React from 'react';
import '../../App.css';
// @ts-ignore
import ParticleRing from "../../components/Animation"
import Front from "./sections/Front";

function Prologue() {
  return (
    <div className="App">
      <div className="a100"><ParticleRing /> </div>
      <Front />
    </div>
  );
}

export default Prologue;