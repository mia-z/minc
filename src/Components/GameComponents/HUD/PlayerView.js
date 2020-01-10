import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../../css/game.css";

const PlayerView = props => {
    return(
        <div className="box">
            <Row>
                <Col>
                    <h5>{props.player.username}</h5>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>Level:&nbsp;{props.player.level}</h5>
                </Col>
            </Row>
        </div>
    );
}

export default PlayerView;