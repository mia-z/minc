import React, { useState, useEffect } from "react";
import "../../../css/game.css";

const LogView = (props) => {
    const [history, setHistory] = useState(props.history);
    useEffect(() => {
        setHistory(props.history);
    }, [props.history]);
    return(
        <div id="log-box" className="half-height-box">
            {
                history.map((item, key) => (
                    <div key={key}>
                        {item}
                    </div>
                ))
            }
        </div>
    );
}

export default LogView;