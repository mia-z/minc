import { GetLocation } from "./../GameVars/Locations";
import { RandomNumber } from "./../../../global";

export const CreateEnemy = (enemyDead, setEnemy, setEnemyDead, currentLocation) => {
    if (!enemyDead)
        return;
    let rand = RandomNumber(0, GetLocation(currentLocation).getMobs().length);
    let mob = GetLocation(currentLocation).getMobs().map((item, index) => {
        if (index === rand) {
            let clone = {};
            Object.keys(item).forEach(key => {
                clone[key] = item[key];
            });
            return clone;
        } else return null;
    });
    console.log(mob);
    setEnemy(mob[rand]);
    setEnemyDead(false);
}