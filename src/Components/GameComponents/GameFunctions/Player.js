import { RandomNumber, LoadData } from "../../../global";

export const PlayerDamage = (enemy, setEnemy, enemyDead, setEnemyDead, logger) => {
    let player = LoadData();
    let dmg = RandomNumber(player["Attack"]-5, player["Attack"]+5);
    dmg = dmg < 1 ? 1 : dmg;
    enemy.eHp -= dmg;
    logger.addMessageToLog(`You hit for ${dmg} damage!`);
    setEnemy(enemy);
}

export const LevelUp = (charData, setCharData, selection) => {
    switch(selection) {
        case "0": 
            charData.Hp += 5;
            charData.level += 1;
            setCharData(charData);
            break;
        case "1": 
            charData.Attack += 1;
            charData.level += 1;
            setCharData(charData);
            break;
        case "2": 
            charData.Defence += 1;
            charData.level += 1;
            setCharData(charData);
            break;
        default:
            throw new Error("Tried to level up, but failed");
    }
}