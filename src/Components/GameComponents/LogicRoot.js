import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PlayerView from "./HUD/PlayerView";
import EnemyView from "./HUD/EnemyView";
import LogView from "./HUD/LogView";
import LevelUpWindow from "./HUD/Windows/LevelUpWindow";
import "../../css/game.css";
import * as Globals from "../../global";
import * as Spawner from "./GameFunctions/Generator";
import * as Player from "./GameFunctions/Player";
import * as Enemy from "./GameFunctions/Enemy"
import * as PostBattle from "./GameFunctions/PostBattle";
import { GameLogger } from "./GameFunctions/GameLogger";

const LogicRoot = (props) => {
    const [charData, setCharData] = useState(Globals.LoadData());
    const [ticker, setTicker] = useState(0);
    const [enemyDead, setEnemyDead] = useState(true);
    const [enemy, setEnemy] = useState({});
    const [history, setHistory] = useState([]);
    const [enemyDiedThisTick, setEnemyDiedThisTick] = useState(false);
    const [logger] = useState(new GameLogger(history, setHistory, ticker))
    const [running, setRunning] = useState(true);
    //const [action, setAction] = useState(props.action);

    useEffect(() => {
        Spawner.CreateEnemy(enemyDead, setEnemy, setEnemyDead, props.currentLocation);
        if (Globals.IsLevellingUp()) 
            setRunning(false);
    }, [props.currentLocation, enemyDead])

    useEffect(() => {
        if (running) {
            const t = setInterval(() => {
                setTicker(x => x + 1);
                GameTick();
            }, enemyDiedThisTick ? 1500 : 500);
            return () => {
                clearInterval(t);
                if (enemyDiedThisTick)
                    setEnemyDiedThisTick(false);
            };
        }
    });

    const GameTick = () => {
        if(Enemy.IsDead(enemy, setEnemyDead, logger)) {
            setEnemyDiedThisTick(true);
            Spawner.CreateEnemy(enemyDead, setEnemy, setEnemyDead, props.currentLocation);
            PostBattle.FightRewards(charData, setCharData, enemy, logger, ticker);
            if (PostBattle.PlayerXp(charData, setCharData, enemy, logger, ticker))
                setRunning(false);
            return;
        }

        Player.PlayerDamage(enemy, setEnemy, enemyDead, setEnemyDead, logger, ticker);

        Globals.SaveData(charData);
    }

    const onLevelUpHide = (selection) => {
        Player.LevelUp(charData, setCharData, selection);
        Globals.setLevellingUp(false);
        setRunning(true);
    }

    return(
        <div className="game-root">
            {
                Globals.IsLevellingUp ? <LevelUpWindow backdrop={"static"} keyboard={false} show={!running} onHide={onLevelUpHide}/> : null
            }
            <Container>
                <Row>
                    <Col md={6}>
                        <PlayerView player={charData} />
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col>
                                <EnemyView enemy={enemy} dead={setEnemyDead} />
                            </Col>
                            <Col>
                                <LogView t={ticker} history={history}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LogicRoot;
