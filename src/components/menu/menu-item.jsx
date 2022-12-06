import React from "react";
import { Link } from "react-router-dom"

const styles = {
    menuItem: {
        margin: "0 10px 0 0"
    }
}

export default function MenuItem(props) {

    // props = {}
    // { menu : { path, title } }

    // const menu = props.menu;

    const { menu } = props

    return <li style={styles.menuItem}>
        <Link to={menu.path}>{menu.title}</Link>
    </li>
}