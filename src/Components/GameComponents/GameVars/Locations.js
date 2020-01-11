import { Mobs } from "./Mobs";

export const GetLocation = id => {
    let loc = Object.values(Locations)
    .filter(item => item.id === id)
    .pop();
    return {
        id: loc.id,
        name: loc.name,
        getMobs: () => {
            return Object.values(Mobs).filter(item => {
                return item.locationId === id;
            });
        }
    };
}

export const Locations = {
    Grassland: {
        id: 0,
        name: "Grassland",
    },

    Forest: {
        id: 1,
        name: "Forest"
    },

    Swamp: {
        id: 2,
        name: "Swamp"
    },

    Desert: {
        id: 3,
        name: "Desert"
    },

    Mountains: {
        id: 4,
        name: "Mountains"
    },

    Tundra: {
        id: 5,
        name: "Tundra"
    }
}
