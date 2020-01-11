import React, { useState } from "react";
import MenuView from "./MenuView";
import DeleteView from "./DeleteView";
import AboutView from "./AboutView";
import CreateCharacterView from "./CreateCharacterView";
import GameRoot from "../GameComponents/GameRoot";
import "../../css/main-menu.css";

const MenuRoot = () => {
    const [menuChoice, setMenuChoice] = useState(0);

    switch (menuChoice) {
        default:
        case 0: return <MenuView selection={setMenuChoice} />;
        case 1: return <GameRoot />;
        case 2: return <CreateCharacterView selection={setMenuChoice}/>;
        case 3: return <DeleteView selection={setMenuChoice}/>;
        case 4: return <AboutView selection={setMenuChoice}/>;
    }
}

export default MenuRoot;