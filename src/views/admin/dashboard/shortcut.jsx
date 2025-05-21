import ProfileInformation from "./information";
import Setting from "./setting";

export default function Shortcuts(){
    return(        
        <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-14 w-full">
            <div className=""><Setting /></div>
            <div className=""><ProfileInformation /></div>
            <div className="">Conversations</div>
            <div className="col-span-3">Projects</div>
        </div> 
    );
}