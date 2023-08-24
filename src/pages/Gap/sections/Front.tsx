import React from "react";
import { SocialIcon } from 'react-social-icons';
import Entry from "../../../components/Entry";


function Front(){
    return (
        <div className="background">
            <div className="container">
                <h1 className="name"> Erik Lidman Hillbom: Gap Year  </h1>
                <div className="begin-header">
                    <h1 className="">In Progress</h1>
                    <a className="white">Until September 2024.</a>
                    <div className="socialIcons">
                        <SocialIcon style={{ height: 35, width: 35 }} bgColor="rgb(215 215 215)" url="https://linkedin.com/in/erik-lidman-hillbom" />
                        <SocialIcon style={{ height: 35, width: 35 }} bgColor="rgb(215 215 215)" url="https://github.com/ErikLHillbom" />
                    </div>
                </div>

            </div>
        </div>
    )    
}

export default Front;