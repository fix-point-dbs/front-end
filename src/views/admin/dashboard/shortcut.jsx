import React from "react";
import ProfileInformation from "./information";
import Setting from "./setting";
import Conversation from "./conversation";
import Projects from "./project";

export default function Shortcuts(){
    return(        
        <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-14 w-full h-screen">
            <div className="h-fill"><Setting /></div>
            <div className="h-fill"><ProfileInformation /></div>
            <div className="h-fill"><Conversation /></div>
            <div className="col-span-3"><Projects /></div>
        </div> 
    );
}