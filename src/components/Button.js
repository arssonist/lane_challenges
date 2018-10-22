import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
    render(){
        return(
            <button onClick={this.props.onClick}>
                {this.props.text}
            </button>
        )
    }
}

export default Button
