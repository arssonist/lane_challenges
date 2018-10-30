import React from 'react';
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';

class Uploader extends React.Component {
    render() {
        return (
            <div className="uploader">
            <Dropzone onDrop={this.props.onDrop}>Drop some files here</Dropzone>
            </div>
        )
    }
}

export default Uploader
