import React from "react";
import Entry from "../../../components/Entry";


function Experience() {
    return (
        <div className="background">
            <div className="container">
                <h1 className="header">Experience</h1>
                <img src="images/RISE.JPEG" className="img" alt=""/>
                <a className="white">A day at work.</a>
                <Entry 
                    title="RISE Research Institutes of Sweden"
                    subtitle="Research and Development Engineer"
                    time="Jun 2022 - Jul 2023"
                    icon="images/rise-logo.png"
                >
                    
                </Entry>       
            </div>
        </div>
    );
}

export default Experience;