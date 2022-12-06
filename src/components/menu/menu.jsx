import React from "react";
import { menuitems } from "../../config/menu";
import MenuItem from "./menu-item";

const styles = {
    menu: {
        display: "flex",
        flexDirection: "row",
        listStyle: "none"
    }
}


export default function Menu() {
    return <div className="application-menu">
        <ul style={styles.menu}>
            {
                menuitems.map((menu)=>{
                    return <MenuItem menu={menu}/>
                })
            }
        </ul>
    </div>
}