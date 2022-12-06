import React from "react"
import { Link } from "react-router-dom"
import { useUserContext } from "../../context/user"

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

    const { user: userDetails } = useUserContext();

    return <div style={styles.header} className="application-header">
        <Logo applicationName={props.applicationName} />
        {!userDetails && <Link to="/user">Login</Link>}
        {userDetails && <Menu />}
        <span>{userDetails && userDetails.user && userDetails.user.email}</span>
    </div>
}