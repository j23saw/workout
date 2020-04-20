import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            minutes: 0,
            seconds: 0
        }

        this.handleChangeMins = this.handleChangeMins.bind(this);
        this.handleChangeSecs = this.handleChangeSecs.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted');
        event.preventDefault();
    }

    handleChangeMins(event) { 
        this.setState({ minutes: event.target.value }); 
    }

    handleChangeSecs(event) { 
        this.setState({ seconds: event.target.value }); 
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
                    <input type='number' value={this.state.minutes} onChange = {this.handleChangeMins}/>
                    <br />
                    <label> Seconds: </label>
                    <input type='number' value={this.state.seconds} onChange = {this.handleChangeSecs} />
                    <br />
                    <input type='submit' value='Start' />
                </form>
            </div>
        )
    }

}

export default App;