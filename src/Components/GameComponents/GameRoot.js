import React, { useState } from "react";
import LogicRoot from "./LogicRoot";
import GameMenuRoot from "./GameMenuRoot";

const GameRoot = () => {
    const [currentLocation, setCurrentLocation] = useState(0);
    const [action, setAction] = useState(0);
    return(
        <>
            <LogicRoot currentLocation={currentLocation} action={action}/>
            <GameMenuRoot 
                currentLocation={currentLocation} 
                setCurrentLocation={setCurrentLocation}
                action={action} 
                setAction={setAction}
            />
        </>
    );
}

export default GameRoot;
