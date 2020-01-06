import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "../../../css/game.css";

const PlayerView = props => {
    const [charData, setCharData] = useState(props.player);
    useEffect(() =>  {
        setCharData(props.player);
    }, [props.player])
    return(
        <>
        <div className="box">
            {
                Object.keys(charData).map((item, key) => (
                    <Row key={key}>
                        <Col md={4}>
                            <h5>{item}:&nbsp;</h5>
                        </Col>
                        <Col>
                            <p>{charData[item]}</p>
                        </Col>
                    </Row>
                ))
            }
        </div>
        </>
    );
}

export default PlayerView;