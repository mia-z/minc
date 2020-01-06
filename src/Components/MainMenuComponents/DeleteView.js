import React, { useState, useEffect } from "react";
import { Col, Row, Button } from "react-bootstrap";

const DeleteView = (props) => {
    const [details, setDetails] = useState(JSON.parse(localStorage.getItem("charData")));
    useEffect(() => {
        localStorage.removeItem("charData");
        console.log(details);
    });
    if (details == null)
     return(
        <div className="menu-root">
            <h5>Deleted</h5>
            <Row className="justify-content-center">
                <Col md={4} className="mt-2">
                    <Button variant="primary" block className="my-1" onClick={() => props.selection(0)}>Back</Button>
                </Col>
            </Row>
        </div>
     ); else return(
        <div className="menu-root">
            <Row className="justify-content-center">
                <Col md={10}>
                    {
                        Object.keys(details).map((item, key) => (
                            <Row key={key}>
                                <Col md={4}>
                                    <h5>{item}:&nbsp;</h5>
                                </Col>
                                <Col>
                                    <p>{details[item]}</p>
                                </Col>
                            </Row>
                        ))
                    }
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={4}>
                    <Button variant="primary" block className="my-1" onClick={() => setDetails(null)}>Delete</Button>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={4} className="mt-2">
                    <Button variant="primary" block className="my-1" onClick={() => props.selection(0)}>Back</Button>
                </Col>
            </Row>
        </div>
    )
}

export default DeleteView;