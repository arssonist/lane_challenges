import React from 'react';
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';

class Uploader extends React.Component {
    render() {
        return (
            <div className="uploader">
            <Dropzone onDrop={this.props.onDrop}>Drop a file here</Dropzone>
            </div>
        )
    }
}

export default Uploader
