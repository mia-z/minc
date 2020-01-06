import React from "react";
import "../../../css/game.css";

const DEBUG_TICKER = props => {

    return(
        <>
        <div className="box">
            {props.ticker}
        </div>
        </>
    );
}

export default DEBUG_TICKER;