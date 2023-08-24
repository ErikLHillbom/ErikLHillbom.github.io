import React from "react";
import { SocialIcon } from 'react-social-icons';
import Entry from "../../../components/Entry";


function Front(){
    return (
        <div className="background">
            <div className="container">
                <h1 className="name"> Erik Lidman Hillbom: Self Study </h1>
                <a className="padding-height"></a>
                <img src="images/vattenfall5.JPEG" className="img" alt=""/>
                <a className="white padding-height">9th grade me.</a>
                <a className="padding-height"></a>
                <a className="white">
                    Between the ages 15 to 18 I self studied online classes, below are some of them. I started during the early Covid-19 pandemic when school went online. Definitely spent more time on it than school.
                </a>
                <div className="socialIcons">
                    <SocialIcon style={{ height: 35, width: 35 }} bgColor="rgb(215 215 215)" url="https://linkedin.com/in/erik-lidman-hillbom" />
                    <SocialIcon style={{ height: 35, width: 35 }} bgColor="rgb(215 215 215)" url="https://github.com/ErikLHillbom" />
                </div>
                <h1 className="header padding-height">Mathematics</h1>
                <Entry 
                    title="MIT 18.01: Single Variable Calculus"
                    subtitle=""
                    time="2019"
                    icon=""
                >
                </Entry>
                <Entry 
                    title="MIT 18.02: Multivariable Calculus"
                    subtitle=""
                    time="2020"
                    icon=""
                >
                </Entry>
                <Entry 
                    title="MIT 18.06: Linear Algebra"
                    subtitle=""
                    time="2020"
                    icon=""
                >
                </Entry>
                <Entry 
                    title="3Blue1Brown"
                    subtitle=""
                    time=""
                    icon=""
                >
                    Extra mention because gives great intuition for all the above topics.
                </Entry>
                <Entry 
                    title="MIT 6.042J: Mathematics for Computer Science"
                    subtitle=""
                    time="2020"
                    icon=""
                >
                </Entry>
                <Entry 
                    title="CS109: Probability for Computer Scientists"
                    subtitle=""
                    time="2021"
                    icon=""
                >
                    Good times. Chris Piech is great.
                </Entry>
                <Entry 
                    title="Stanford EE263: Introduction to Linear Dynamical Systems"
                    subtitle=""
                    time="2021"
                    icon=""
                >
                    About half of it. 
                </Entry>
                <Entry 
                    title="MIT 18.S096: Topics in Mathematics With Applications In Finance"
                    subtitle=""
                    time="2021"
                    icon=""
                >
                    About half of it. 
                </Entry>
                <h1 className="header padding-height">Computer Science</h1>
                <Entry 
                    title="MIT 6.0001: Introduction to Computer Science And Programming in Python"
                    subtitle=""
                    time="2017"
                    icon=""
                >
                    
                </Entry>
                <Entry 
                    title="Harvard CS50: Introduction to Computer Science"
                    subtitle=""
                    time="2020"
                    icon=""
                >
                    David Malan. Good movie.
                </Entry>
                <Entry 
                    title="Stanford CS106X: Programming Abstractions in C++"
                    subtitle=""
                    time="2021"
                    icon=""
                >
                    Lots of coding. Created video: https://www.youtube.com/@echolos7864
                </Entry>
                <Entry 
                    title="Stanford CS221: Artificial Intelligence"
                    subtitle=""
                    time="2021"
                    icon=""
                >
                    Percy Liang, wpm? 
                </Entry>
                <Entry 
                    title="Michigan EECS 498.008/598.008: Deep Learning for Computer Vision"
                    subtitle=""
                    time="2021"
                    icon=""
                >
                    Justin Johnson. Awesome! 
                </Entry>
                <Entry 
                    title="Carnegie Mellon University 15-213: Introduction to Computer Systems"
                    subtitle=""
                    time="2022"
                    icon=""
                >
                    Randal E. Bryant and David R. O´Hallaron. Unique assignments. 
                </Entry>
                <Entry 
                    title="MIT 6.006: Introduction to Algorithms"
                    subtitle=""
                    time="2022"
                    icon=""
                >
                    Good for competitive programming.
                </Entry>
                <Entry 
                    title="MIT 6.046J: Design and Analysis of Algorithms"
                    subtitle=""
                    time="2022"
                    icon=""
                >
                    Good for competitive programming.
                </Entry>
                <Entry 
                    title="Stanford CS224N: Natural Language Processing with Deep Learning"
                    subtitle=""
                    time="2022"
                    icon=""
                >
                </Entry>
            </div>
        </div>
    )    
}

export default Front;