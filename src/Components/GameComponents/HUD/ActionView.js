//TODO: Abstraction for this component into other components instead of what it looks like now (ugly)

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Locations } from "./../GameVars/Locations";
import "../../../css/game.css";

const ActionView = (props) => {
    const actionButtons = [
        "Travel", "Shop", "Heal", "Stats"
    ];
    const locs = Object.keys(Locations);

    const handleLocationButtonClick = key => {
        props.setCurrentLocation(key);
    }

    const handleActionButtonClick = key => {
        props.setAction(key);
    }

    switch(props.action) {
        case 0: return(
            <>
            <div className="wide-box">
                <div id="action-box">
                    {
                        locs.map((loc, key, arr) => (
                            <Button key={key} variant={props.currentLocation === key ? "secondary" : "primary"} className="m-2" onClick={() => handleLocationButtonClick(key) }>{loc}</Button>
                        ))
                    }
                </div>
                <div id="action-bar">
                    {
                        actionButtons.map((button, key, arr,) => (
                            <Button key={key} variant={props.action === key ? "secondary" : "primary"} className="m-2" onClick={() => handleActionButtonClick(key)}>{button}</Button>
                        ))
                    }
                </div>
            </div>
            </>
        );
        case 1: return(
            <>
            <div className="wide-box">
                <div id="action-box">
                    shop
                </div>
                <div id="action-bar">
                    {
                        actionButtons.map((button, key, arr,) => (
                            <Button key={key} variant={props.action === key ? "secondary" : "primary"} className="m-2" onClick={() => handleActionButtonClick(key)}>{button}</Button>
                        ))
                    }
                </div>
            </div>
            </>
        );

        case 2: return(
            <>
            <div className="wide-box">
                <div id="action-box">
                    heal
                </div>
                <div id="action-bar">
                    {
                        actionButtons.map((button, key, arr,) => (
                            <Button key={key} variant={props.action === key ? "secondary" : "primary"} className="m-2" onClick={() => handleActionButtonClick(key)}>{button}</Button>
                        ))
                    }
                </div>
            </div>
            </>
        );

        case 3: return(
            <>
            <div className="wide-box">
                <div id="action-box">
                    stats
                </div>
                <div id="action-bar">
                    {
                        actionButtons.map((button, key, arr,) => (
                            <Button key={key} variant={props.action === key ? "secondary" : "primary"} className="m-2" onClick={() => handleActionButtonClick(key)}>{button}</Button>
                        ))
                    }
                </div>
            </div>
            </>
        );

        default: return(
            <>
            <div className="wide-box">
                <div id="action-box">
                    YOU SHOULDNT BE HERE REEEEEEEEEEEEEEEEE
                </div>
                <div id="action-bar">
                    {
                        actionButtons.map((button, key, arr,) => (
                            <Button key={key} variant={props.action === key ? "secondary" : "primary"} className="m-2" onClick={() => handleActionButtonClick(key)}>{button}</Button>
                        ))
                    }
                </div>
            </div>
            </>
        );
    }
}

export default ActionView;