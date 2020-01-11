import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../../css/game.css";

const EnemyView = props => {
    return(
        <div className="half-height-box">
            <Row>
                <Col md={4}>
                    <h5>Name:&nbsp;</h5>
                </Col>
                <Col>
                    <p>{props.enemy.name}</p>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <h5>Level:&nbsp;</h5>
                </Col>
                <Col>
                    <p>{props.enemy.level}</p>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <h5>Health:&nbsp;</h5>
                </Col>
                <Col>
                    <p>{props.enemy.eHp}</p>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <h5>Attack:&nbsp;</h5>
                </Col>
                <Col>
                    <p>{props.enemy.attack}</p>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <h5>Defence:&nbsp;</h5>
                </Col>
                <Col>
                    <p>{props.enemy.defence}</p>
                </Col>
            </Row>
        </div>
    );
}

export default EnemyView;