import React from "react";

export default class CounterWithClass extends React.Component {

    state = {
        counter: 0,
        currentTime: ""
    };

    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState({ currentTime: new Date().toISOString() })
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        return <div>
            <button onClick={()=>{ this.setState({ counter: this.state.counter - 1 }) }}>-</button>
            { this.state.counter }
            <button onClick={()=>{ this.setState({ counter: this.state.counter + 1 }) }}>+</button>
            <p>Current time: {this.state.currentTime}</p>
            <p>{this.props.applicationName}</p>
        </div>
    }

}