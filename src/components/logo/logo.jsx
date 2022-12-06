import React from "react";

export default function Logo(props){
    return <div style={{ marginTop: "15px" }} className="application-logo">
        {props.applicationName}
    </div>
}