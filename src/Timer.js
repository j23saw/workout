import React, { Component } from 'react';
import Input from './Input';

class Timer extends Component{
    constructor(props){
        super(props);
        time = this.props.time;
    }
    render(){
        return(
            <p>
                {time}
            </p>
        )

    }

}

export default Timer;