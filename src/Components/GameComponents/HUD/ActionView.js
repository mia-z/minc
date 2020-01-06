//TODO: Abstraction for this component into other components instead of what it looks like now (ugly)

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Locations } from "./../GameVars/Locations";

import "../../../css/game.css";

const ActionView = props => {
    const [action, setAction] = useState(props.action);
    const [currentLocation, setCurrentLocation] = useState(props.currentLocation);
    const actionButtons = [
        "Travel", "Shop", "Heal", "Stats"
    ];
    const locs = Object.keys(Locations);
    useEffect(() => {
        setAction(props.action);
        setCurrentLocation(props.currentLocation);
    }, [props.action, props.currentLocation]);

    switch(action) {
        case 0: return(
            <>
            <div className="box">
                <div id="action-box">
                    {
                        locs.map((loc, key, arr) => (
                            <Button key={key} variant={currentLocation === key ? "secondary" : "primary"} className="m-2" onClick={() => props.setCurrentLocation(key)}>{loc}</Button>
                        ))
                    }
                </div>
                <div id="action-bar">
                    {
                        actionButtons.map((button, key, arr,) => (
                            <Button key={key} variant={action === key ? "secondary" : "primary"} className="m-2" onClick={() => props.setAction(key)}>{button}</Button>
                        ))
                    }
                </div>
            </div>
            </>
        );

        case 1: return(
            <>
            <div className="box">
                <div id="action-box">
                    1
                </div>
                <div id="action-bar">
                    {
                        actionButtons.map((button, key, arr,) => (
                            <Button key={key} variant={action === key ? "secondary" : "primary"} className="m-2" onClick={() => props.setAction(key)}>{button}</Button>
                        ))
                    }
                </div>
            </div>
            </>
        );

        case 2: return(
            <>
            <div className="box">
                <div id="action-box">
                    2
                </div>
                <div id="action-bar">
                    {
                        actionButtons.map((button, key, arr,) => (
                            <Button key={key} variant={action === key ? "secondary" : "primary"} className="m-2" onClick={() => props.setAction(key)}>{button}</Button>
                        ))
                    }
                </div>
            </div>
            </>
        );

        case 3: return(
            <>
            <div className="box">
                <div id="action-box">
                    3
                </div>
                <div id="action-bar">
                    {
                        actionButtons.map((button, key, arr,) => (
                            <Button key={key} variant={action === key ? "secondary" : "primary"} className="m-2" onClick={() => props.setAction(key)}>{button}</Button>
                        ))
                    }
                </div>
            </div>
            </>
        );

        default: return(
            <>
            <div className="box">
                <div id="action-box">
                    default
                </div>
                <div id="action-bar">
                    {
                        actionButtons.map((button, key, arr,) => (
                            <Button key={key} variant={action === key ? "secondary" : "primary"} className="m-2" onClick={() => props.setAction(key)}>{button}</Button>
                        ))
                    }
                </div>
            </div>
            </>
        );
    }

    
}

export default ActionView;