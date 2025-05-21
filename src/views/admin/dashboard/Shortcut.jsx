import React from "react";
import ProfileInformation from "./Information";
import Setting from "./Setting";
import Conversation from "./Conversation";
import Projects from "./Project";

export default function Shortcut(){
    return(        
        <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-14 w-full h-screen">
            <div className="h-fill"><Setting /></div>
            <div className="h-fill"><ProfileInformation /></div>
            <div className="h-fill"><Conversation /></div>
            <div className="col-span-3"><Projects /></div>
        </div> 
    );
}