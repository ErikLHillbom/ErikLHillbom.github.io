import React from "react";
import Entry from "../../../components/Entry";


function Education() {
    return (
        <div className="background">
            <div className="container">
                <h1 className="header">Education</h1>
                <img src="images/graduating.jpg" className="img" alt=""/>
                <a className="white"> Graduating. </a>
                <a className="padding-height"></a>
                <Entry 
                    title="Viktor Rydberg Gymnasium Djursholm"
                    subtitle=""
                    time="2020 - 2023"
                    icon="images/VRG-logo.png"
                >
                    Wrote my thesis with the CEO of Lånekoll about the effects of SOU 2022:12 on loan brokers and first-time real estate buyers | Founded online marketplace for local produce. | In AIDA at Model European Parliament, wrote resolution to maximize benefits & minimize risks of AI.
                </Entry>
            </div>

        </div>
    );
}

export default Education;