import React, { useState, useEffect, useCallback } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import DEBUG_TICKER from "./HUD/DEBUG_TICKER";
import PlayerView from "./HUD/PlayerView";
import EnemyView from "./HUD/EnemyView";
import LogView from "./HUD/LogView";
import ActionView from "./HUD/ActionView";
import "../../css/game.css";
import { LoadData, SaveData } from "../../global";
import * as Spawner from "./GameFunctions/Generator";
import * as Player from "./GameFunctions/Player";
import * as Enemy from "./GameFunctions/Enemy"
import * as PostBattle from "./GameFunctions/PostBattle";
import { GameLogger } from "./GameFunctions/GameLogger";

const GameRoot = () => {
    const [charData, setCharData] = useState(LoadData());
    const [currentLocation, setCurrentLocation] = useState(0);
    const [action, setAction] = useState(0);
    const [ticker, setTicker] = useState(0);
    const [enemyDead, setEnemyDead] = useState(true);
    const [enemy, setEnemy] = useState({});
    const [history, setHistory] = useState([]);
    const [logger] = useState(new GameLogger(history, setHistory, ticker))
    useEffect(() => {
        const t = setInterval(() => {
            setTicker(ticker + 1);
            GameTick(ticker);
        }, 500);
        return () => clearInterval(t);
    });

    Spawner.CreateEnemy(enemyDead, setEnemy, setEnemyDead, currentLocation);

    const GameTick = () => {
        Player.PlayerDamage(enemy, setEnemy, enemyDead, setEnemyDead, logger, ticker);

        if(Enemy.IsDead(enemy, setEnemyDead, logger, ticker)) {
            Spawner.CreateEnemy(enemyDead, setEnemy, setEnemyDead, currentLocation);
            PostBattle.FightRewards(charData, setCharData, enemy, logger, ticker);
            PostBattle.PlayerXp(charData, setCharData, enemy, logger, ticker);
        }

        SaveData(charData);
    }

    return(
        <div className="game-root">
            <Container>
                <Row>
                    <Col md={4}>
                        <PlayerView player={charData} />
                    </Col>
                    <Col md={4}>
                        <EnemyView enemy={enemy} dead={setEnemyDead} />
                    </Col>
                    <Col md={4}>
                        <ActionView 
                            action={action} 
                            setAction={setAction} 
                            currentLocation={currentLocation}
                            setCurrentLocation={setCurrentLocation}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <DEBUG_TICKER ticker={ticker} />
                    </Col>
                    <Col md={6}>
                        <LogView t={ticker} history={history}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default GameRoot;
