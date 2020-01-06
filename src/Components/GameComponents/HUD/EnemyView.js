import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "../../../css/game.css";

const EnemyView = props => {
    const [enemyData, setEnemyData] = useState({
        Name: props.enemy.name,
        Level: props.enemy.level,
        Health: props.enemy.eHp,
        Attack: props.enemy.attack,
        Defence: props.enemy.defence
    });
    useEffect(() => {
        setEnemyData({
            Name: props.enemy.name,
            Level: props.enemy.level,
            Health: props.enemy.eHp,
            Attack: props.enemy.attack,
            Defence: props.enemy.defence
        });
    }, [props.enemy.name, props.enemy.level, props.enemy.eHp, props.enemy.attack, props.enemy.defence]);
    
    return(
        <>
        <div className="box">
            {
                Object.keys(enemyData).map((item, key) => (
                    <Row key={key}>
                        <Col md={4}>
                            <h5>{item}:&nbsp;</h5>
                        </Col>
                        <Col>
                            <p>{enemyData[item]}</p>
                        </Col>
                    </Row>
                ))
            }
        </div>
        </>
    );
}

export default EnemyView;