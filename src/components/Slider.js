import React from 'react';
import ReactDOM from 'react-dom';


class Slider extends React.Component {
    render() {
        return (
            <div className="range-slider">Zoom:
                <input type="range" onChange={this.props.onChange} value={this.props.value}/>
            </div>
        )
    }
}

export default Slider
