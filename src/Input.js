import React from 'react';

class Input extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <form className='tc'>
                    <input type='number' value={time} />
                    <input id='submit' type="submit" value='Submit' />
                </form>
            </div>
        )

    }

}

export default Input;