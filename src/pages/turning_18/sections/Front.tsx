import React from "react";
import { SocialIcon } from 'react-social-icons';


function Front(){
    return (
        <div className="background">
            <div className="container">
                <h1 className="name"> Erik Lidman Hillbom: Turning 18 </h1>
                <a className="padding-height"></a>
                <a className="white">
                While in secondary school I worked with Research Institutes of Sweden, at the Swedish Institute of Computer Science, doing machine learing / natural language processing research. 
                I got the job when I turned 18 and it was great because I worked with awesome people on fun projects. 
                During that time I was also competing in the Swedish Programming Olympiad solving beautiful problems (and tedious implementation problems... What doesn't kill you makes you type faster). 
                </a>
                <div className="socialIcons">
                    <SocialIcon style={{ height: 35, width: 35 }} bgColor="rgb(215 215 215)" url="https://linkedin.com/in/erik-lidman-hillbom" />
                    <SocialIcon style={{ height: 35, width: 35 }} bgColor="rgb(215 215 215)" url="https://github.com/ErikLHillbom" />
                </div>
            </div>
        </div>
    )    
}

export default Front;