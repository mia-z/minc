import React, { useState, useEffect } from "react";
import "../../../css/game.css";

const LogView = props => {
    const [history, setHistory] = useState(props.history);
    return(
        <>
        <div className="box" id="log-box">
            {
                history.map((item, key) => (
                    <div key={key}>
                        {item}
                    </div>
                ))
            }
        </div>
        </>
    );
}

export default LogView;