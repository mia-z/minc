import React from "react";
import { Col, Row, Button } from "react-bootstrap";

const MenuView = (props) => {
    
    return(
        <div className="menu-root">
            <Row className="justify-content-center">
                <Col>
                    <h3>Select an option</h3>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={3}>
                    <Button variant="primary" block className="my-1" onClick={(() => props.selection(1))}>Create</Button>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={3}>
                    <Button variant="primary" block className="my-1">Load</Button>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={3}>
                    <Button variant="primary" block className="my-1">About</Button>
                </Col>
            </Row>
        </div>
    )
}

export default MenuView;