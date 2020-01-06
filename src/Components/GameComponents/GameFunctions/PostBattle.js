import { RandomNumber, CheckLevelUp } from "../../../global";

export const FightRewards = (charData, setCharData, enemy) => {
    charData.gold += enemy.goldReward();
    setCharData(charData);
}

export const PlayerXp = (charData, setCharData, enemy) => {
    charData.xp += enemy.xpReward();
    if (CheckLevelUp(charData.level, charData.xp)) {
        charData.level++;
    }
    setCharData(charData);
}