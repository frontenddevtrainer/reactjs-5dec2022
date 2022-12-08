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
        <button data-testid="counter-decrease-button" onClick={()=>{ setCounter( counter - 1 ) }}>-</button>
        <span data-testid="counter-value-text" style={styles.counter}>{ counter }</span>
        <button data-testid="counter-increase-button" onClick={()=>{ setCounter( counter + 1 ) }} >+</button>
        <p>Current time: {currentTime}</p>
    </div>
}