import React, { useEffect } from "react";
import Media from "../components/menu/Media";
import MenuList from "../components/menu/MenuList";
import { ITEMS, MENU_HEADER } from "../components/util/itemlist";
import { scrollToTop } from "../App";
const Menu = () =>{
    useEffect(() =>{
        scrollToTop()
    },[])
    return (
        <div className="menu">
            <Media />
            <MenuList header={MENU_HEADER} items={ITEMS} />
        </div>
    )
}
export default Menu;