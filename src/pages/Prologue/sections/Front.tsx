import React from "react";
import { SocialIcon } from 'react-social-icons';
import Entry from "../../../components/Entry";


function Front(){
    return (
        <div className="background">
            <div className="container">
                <h1 className="name"> Erik Lidman Hillbom: Prologue </h1>
                <a className="padding-height"></a>
                <a className="white">
                The earliest I remember "coding" was somewhere in between first to third grade playing around in scratch and changing the HTML of a website with inspect. I continued to learn and do small coding projects as part of school classes. In 2017, when I was around 13, I decided to learn some coding myself. That led to me coding programs, games and websites. Below are some of the notes I took back then.
                </a>
                <a className="padding-height"></a>
                <img src="images/early_notes.jpg" className="img wide-img" alt=""/>
                <div className="socialIcons">
                    <SocialIcon style={{ height: 35, width: 35 }} bgColor="rgb(215 215 215)" url="https://linkedin.com/in/erik-lidman-hillbom" />
                    <SocialIcon style={{ height: 35, width: 35 }} bgColor="rgb(215 215 215)" url="https://github.com/ErikLHillbom" />
                </div>                
            </div>
        </div>
    )    
}

export default Front;