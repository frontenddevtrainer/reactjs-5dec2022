import React from "react"

import Logo from "../logo/logo"
import Menu from "../menu/menu"

const styles = {
    header : {
        backgroundColor : "yellow",
        padding: "5px",
        display: "flex",
        flexDirection: "row"
    }
}

export default function Header(props){

    console.log(props);

    return <div style={styles.header} className="application-header">
        <Logo applicationName={props.applicationName} />
        <Menu />
    </div>
}