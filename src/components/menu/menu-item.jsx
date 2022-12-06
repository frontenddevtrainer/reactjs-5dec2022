import React from "react";

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
        <a href={menu.path}>{menu.title}</a>
    </li>
}