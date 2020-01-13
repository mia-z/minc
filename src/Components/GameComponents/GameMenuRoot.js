import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ActionView from "./HUD/ActionView";

const GameMenuRoot = (props) => {
    return(
        <div className="game-root">
            <Container>
                <ActionView 
                    {...props}
                    />
            </Container>
        </div>
    );
}


export default GameMenuRoot;