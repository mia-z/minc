import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ActionView from "./HUD/ActionView";

const GameMenuRoot = (props) => {
    const [currentLocation, setCurrentLocation] = useState(props.currentLocation);
    const [action, setAction] = useState(0);
    useEffect(() => {
        setCurrentLocation(currentLocation);
        props.setCurrentLocation(currentLocation);
    }, [props, currentLocation]);

    return(
        <div className="game-root">
            <Container>
                <ActionView 
                    action={action} 
                    setAction={setAction}
                    currentLocation={currentLocation}
                    setCurrentLocation={setCurrentLocation}
                    />
            </Container>
        </div>
    );
}


export default GameMenuRoot;