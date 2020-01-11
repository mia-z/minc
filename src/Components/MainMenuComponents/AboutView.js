import React from "react";
import { Col, Row, Button } from "react-bootstrap";

const AboutView = (props) => {
    
    return(
        <div className="menu-root">
            <Row className="justify-content-center">
                <Col md={4} className="mt-1">
                    <Button variant="primary" block className="my-1" onClick={() => props.selection(0)}>Back</Button>
                </Col>
            </Row>
        </div>
    )
}

export default AboutView;