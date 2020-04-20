import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            minutes: 0,
            seconds: 0
        }

        this.incrementMins = this.incrementMins.bind(this);
        this.decrementMins = this.decrementMins.bind(this);
        this.incrementSecs = this.incrementSecs.bind(this);
        this.decrementSecs = this.decrementSecs.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted');
        event.preventDefault();
    }

    incrementMins() { 
        this.setState({
             minutes: this.state.minutes + 1 
            }); 
    }

    decrementMins() { 
        this.setState({  
            minutes: this.state.minutes - 1
        }); 
    }

    incrementSecs() { 
        this.setState({
             seconds: this.state.seconds + 1 
            }); 
    }

    decrementSecs() { 
        this.setState({  
            seconds: this.state.seconds - 1
        }); 
    }

    render() {
        let padSecs = String(this.state.seconds).padStart(2, '0');
        let padMins = String(this.state.minutes).padStart(2, '0');


        return (
            <div className='tc'>
                <p>
                    {padMins}:{padSecs}
                </p>

                <form onSubmit={this.handleSubmit}>
                    <label>Minutes: </label>
                    <input className= 'ma2' type='button' value = '+' onClick = {this.incrementMins}/>
                    <input className= 'ma2' type='button' value = '-' onClick = {this.decrementMins}/>
                    <br />
                    <label> Seconds: </label>
                    <input className= 'ma2'type='button' value = '+' onClick = {this.incrementSecs}/>
                    <input className= 'ma2'type='button' value = '-' onClick = {this.decrementSecs}/>
                    <br />
                    <input type='submit' value='Start' />
                </form>
            </div>
        )
    }

}

export default App;