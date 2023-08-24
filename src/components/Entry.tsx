import React from "react";


interface EntryProps{
    title: string;
    subtitle: string;
    time: string;
    icon: string;
    children: React.ReactNode;
}

const Entry = ({title, subtitle, time, icon, children}: EntryProps) => {
    return (
        <div className="entryWrapper">
            <div className="logoTime">
                <div className="iconDiv"><img src={icon} className="icon" alt="" /></div>
                <div className="time">{time}</div>
            </div>
            <div className="textWrapper">
                <div className="title"> {title} </div>
                <div className="subtitle"> {subtitle} </div>
                <div className="text"> {children} </div>
            </div>
        </div>
    );
};

export default Entry;
