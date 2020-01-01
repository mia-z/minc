import React, { useState } from "react";
import MenuView from "./MenuView";
import CreateCharacterView from "./CreateCharacterView";
import "../../css/main-menu.css";
const MenuRoot = () => {
    const [menuChoice, setMenuChoice] = useState(0);

    switch (menuChoice) {
        default:
        case 0: return <MenuView selection={setMenuChoice} />;
        case 1: return <CreateCharacterView selection={setMenuChoice}/>;
    }
}

export default MenuRoot;