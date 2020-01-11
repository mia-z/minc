import React from "react";
import { Modal, Col, Row, Button } from "react-bootstrap";
import * as Player from "../../GameFunctions/Player";

const LevelUpWindow = (props) => {
    return(
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Levelled up!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="justify-content-center">
                    <Col md={4}>
                        <Button block variant="success" onClick={() => props.onHide("0")}>HP +5</Button>
                    </Col>
                    <Col md={4}>
                        <Button block variant="danger" onClick={() => props.onHide("1")}>Attack +1</Button>
                    </Col>
                    <Col md={4}>
                        <Button block variant="primary" onClick={() => props.onHide("2")}>Defence +1</Button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default LevelUpWindow;