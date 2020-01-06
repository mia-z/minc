export const IsDead = (enemy, setEnemyDead, logger, ticker) => {
    if(enemy.eHp <= 0) {
        setEnemyDead(true);
        logger.addMessageToLog(ticker + " Enemy died!")
        return true;
    } else 
        return false;
}