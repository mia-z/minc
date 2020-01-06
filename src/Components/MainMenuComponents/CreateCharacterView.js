import React, { useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";

const CreateCharacterView = (props) => {
    const [errors, setErrors] = useState([]);
    const [details] = useState({ 
        username: "", 
        level: "", 
        xp: "", 
        gold: "",
        currentHp: 10,
        Hp: 10,
        
    });
    
    const SetCharacterDetails = () => {
        let formErrors = [];
        if (details.username === "") {
            formErrors.push("Must enter a name");
            setErrors(formErrors);
        } 

        if (details.username.length > 20) {
            formErrors.push("Name too long");
            setErrors(formErrors);
        }

        if (formErrors.length === 0) {
            details.level = 1;
            details.xp = 0;
            details.gold = 0;
            localStorage.setItem("charData", JSON.stringify(details));
            props.selection(0);
        }
    }

    const UpdateDetailsField = (event, field) => {
        switch(field) {
            case 0: 
                details.username = event.target.value;
                break;
            default: 
                break;
        }
    }

    return(
        <div className="menu-root">
            <Row className="justify-content-center">
                <Col className="mb-5">
                    <h3>Create</h3>
                </Col>
            </Row>
            <Form onSubmit={event => event.preventDefault()}>
                <Row className="justify-content-center">
                    <Col md={3} className="align-self-center">
                        <Form.Label htmlFor="username-input">Username</Form.Label>
                    </Col>
                    <Col md={6}>
                        <Form.Control type="text" id="username-input" onChange={event => UpdateDetailsField(event, 0)} />
                    </Col>
                </Row>
                {
                    errors.map((item, key) => (
                        <Row key={key} className="justify-content-center">
                            <Col>
                                <h5>{item}</h5>
                            </Col>
                        </Row>
                    ))
                }
            </Form>
            <Row className="justify-content-center">
                <Col md={4} className="mt-5">
                    <Button variant="primary" block className="my-1" onClick={() => SetCharacterDetails(details)}>Save</Button>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={4} className="mt-1">
                    <Button variant="primary" block className="my-1" onClick={() => props.selection(0)}>Back</Button>
                </Col>
            </Row>
        </div>
    )
}

export default CreateCharacterView;