import React from "react";
import Entry from "../../../components/Entry";


function Awards() {
    return (
        <div className="background">
            <div className="container">
                <h1 className="header">Awards</h1>
                <img src="images/CP.JPEG" className="img" alt=""/>
                <a className="white">Borrowed apartment for 24 hour competitive programming competition. (Transformer blankets for attention...)</a>
                <a className="padding-height"></a>
                <Entry 
                    title="Swedish Programming Olympiad"
                    subtitle=""
                    time="2023"
                    icon="images/progolymp-logo.png"
                >
                    Finalist and Camp.
                </Entry>
            </div>

        </div>
    );
}

export default Awards;