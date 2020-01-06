import { RandomNumber } from "./../../../global";

//Grassland mobs, locationId: 0
export const Mobs = {
    Rat: {
        locationId: 0,
        name: "Rat",
        level: 1,
        eHp: 5,
        defence: 2,
        attack: 1,
        xpReward: () => {
            return RandomNumber(Math.floor(5 /4), Math.floor(5*1.2));
        },
        goldReward: () => {
            return RandomNumber(1, 10);
        }
    },
    
    Frog: {
        locationId: 0,
        name: "Frog",
        level: 2,
        eHp: 10,
        defence: 2,
        attack: 3,
        xpReward: () => {
            return RandomNumber(Math.floor(10 /4), Math.floor(10*1.2));
        },
        goldReward: () => {
            return RandomNumber(1, 10);
        }
    },
    
    Snake: {
        locationId: 0,
        name: "Snake",
        level: 4,
        eHp: 20,
        defence: 3,
        attack: 5,
        xpReward: () => {
            return RandomNumber(Math.floor(20 /4), Math.floor(20*1.2));
        },
        goldReward: () => {
            return RandomNumber(1, 10);
        }
    },
    
    Blob: {
        locationId: 0,
        name: "Blob",
        level: 5,
        eHp: 50,
        defence: 10,
        attack: 6,
        xpReward: () => {
            return RandomNumber(Math.floor(50 /4), Math.floor(50*1.2));
        },
        goldReward: () => {
            return RandomNumber(1, 10);
        }
    },
    
    Wolf: {
        locationId: 0,
        name: "Wolf",
        level: 7,
        eHp: 80,
        defence: 5,
        attack: 9,
        xpReward: () => {
            return RandomNumber(Math.floor(80 /4), Math.floor(80*1.2));
        },
        goldReward: () => {
            return RandomNumber(1, 10);
        }
    },

    ForestEnemy: {
        locationId: 1,
        name: "ForestEnemy",
        level: 7,
        eHp: 80,
        defence: 5,
        attack: 9,
        xpReward: () => {
            return RandomNumber(Math.floor(80 /4), Math.floor(80*1.2));
        },
        goldReward: () => {
            return RandomNumber(1, 10);
        }
    },

    SwampEnemy: {
        locationId: 2,
        name: "SwampEnemy",
        level: 7,
        eHp: 80,
        defence: 5,
        attack: 9,
        xpReward: () => {
            return RandomNumber(Math.floor(80 /4), Math.floor(80*1.2));
        },
        goldReward: () => {
            return RandomNumber(1, 10);
        }
    },

    DesertEnemy: {
        locationId: 3,
        name: "DesertEnemy",
        level: 7,
        eHp: 80,
        defence: 5,
        attack: 9,
        xpReward: () => {
            return RandomNumber(Math.floor(80 /4), Math.floor(80*1.2));
        },
        goldReward: () => {
            return RandomNumber(1, 10);
        }
    },
    
    MountainsEnemy: {
        locationId: 4,
        name: "MountainsEnemy",
        level: 7,
        eHp: 80,
        defence: 5,
        attack: 9,
        xpReward: () => {
            return RandomNumber(Math.floor(80 /4), Math.floor(80*1.2));
        },
        goldReward: () => {
            return RandomNumber(1, 10);
        }
    },

    TundraEnemy: {
        locationId: 5,
        name: "TundraEnemy",
        level: 7,
        eHp: 80,
        defence: 5,
        attack: 9,
        xpReward: () => {
            return RandomNumber(Math.floor(80 /4), Math.floor(80*1.2));
        },
        goldReward: () => {
            return RandomNumber(1, 10);
        }
    }
}
