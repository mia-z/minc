import { RandomNumber } from "../../../global";

export const PlayerDamage = (enemy, setEnemy, enemyDead, setEnemyDead, logger, ticker) => {
    let dmg = RandomNumber(5, 15);
    enemy.eHp -= dmg;
    setEnemy(enemy);
    logger.addMessageToLog(`${ticker} Player dealt ${dmg} damage`);
}