import React, { useState, useEffect } from "react";

export default function Counter(){

    const [ counter, setCounter ] = useState(0);
    const [ currentTime, setCurrentTime ] = useState("");

    const styles = {
        counter: {
            color: counter % 2 === 0 ? "red" : "blue"
        }
    }

    // componentDidMount
    useEffect(()=>{
        const interval = window.setInterval(()=>{
            console.log("Interval running.")
            setCurrentTime(new Date().toISOString())
        }, 1000)

        // componentWillUnmount
        return ()=>{
            // Cleanup logic.
            clearInterval(interval);
        }

    }, [])

    return <div>
        <button onClick={()=>{ setCounter( counter - 1 ) }}>-</button>
        <span style={styles.counter}>{ counter }</span>
        <button onClick={()=>{ setCounter( counter + 1 ) }} >+</button>
        <p>Current time: {currentTime}</p>
    </div>
}