import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import './App.css';
import AvatarEditor from 'react-avatar-editor'


class MyEditor extends React.Component {
  render () {
    return (
      <AvatarEditor
        image={this.props.url}
        width={250}
        height={250}
        border={50}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
        rotate={0}
      />
    )
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }
    onDrop(acceptedFiles){
      this.setState({
        files: acceptedFiles
      })
  }
  render() {
    return (
      <div className="upLoader">
        <MyEditor url={this.state.files[0] ? this.state.files[0].preview : ''} />
        <Dropzone onDrop={this.onDrop.bind(this)} >Drop some files here</Dropzone>
        { this.state.files.length > 0 ?
          <div className="hold-filesOe">
            <div className="map-files">
              {this.state.files.map( function(file){ return <img src={file.preview} />; } ) }</div>
          </div> : null
        }
      </div>
    );
  }
}

export default App;
