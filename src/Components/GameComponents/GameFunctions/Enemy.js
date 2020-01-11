export const IsDead = (enemy, setEnemyDead, logger) => {
    if(enemy.eHp <= 0) {
        setEnemyDead(true);
        logger.addMessageToLog(`${enemy.name} died!`);
        return true;
    } else 
        return false;
}