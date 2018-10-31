import React from 'react';
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';

class Uploader extends React.Component {
    render() {
        return (
            <div className="uploader">
            <Dropzone onDrop={this.props.onDrop}> Click here, or drop a file</Dropzone>
            </div>
        )
    }
}

export default Uploader
