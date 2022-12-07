import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { useTheme } from "../../context/theme"
import { userContext, useUserContext } from "../../context/user"

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
    const { setTheme } = useTheme()
    // const {  user: userDetails } = useContext(userContext);

    return <div style={styles.header} className="application-header">
        <Logo applicationName={props.applicationName} />
        {!userDetails && <Link to="/user">Login</Link>}
        {userDetails && <Menu />}
        <span>{userDetails && userDetails.user && userDetails.user.email}</span>
        <select onChange={(e)=>{ setTheme(e.target.value) }}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    </div>
}