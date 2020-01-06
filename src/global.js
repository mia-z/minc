const initXpTable = () => {
    //Initialize the xp table
    const BASE_XP = 550;
    let xpTable = [];
    for (let x = 0; x < 200; x++) {
        if (x === 0) { xpTable.push(0); }
        else if (x === 1) { xpTable.push(0); }
        else {
            let mod = x + 80;
            let pre = Math.floor(Math.pow(BASE_XP * (x * 1.016), (mod * 0.008)));
            xpTable.push(Math.floor((pre/9) + xpTable[x-1]));
            //xpTable.push(Math.floor((xpTable[x-1] + (BASE_XP * x)) * 1.0075));
        }
    }
    console.log(xpTable);
    return xpTable;
}

export const XpTable = initXpTable();

export const SaveData = data => {
    localStorage.setItem("charData", JSON.stringify(data));
}

export const LoadData = () => {
    return JSON.parse(localStorage.getItem("charData"));
}

export const RandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
}

export const CheckLevelUp = (level, xp) => {
    if (xp >= XpTable[level + 1])
        return true; 
    else return false;
}