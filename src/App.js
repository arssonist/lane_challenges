import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import AvatarEditor from 'react-avatar-editor'
import Editor from './components/Editor'
import Uploader from './components/Uploader'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      files: [],
      uploaded: false
    };
  }
  // dropzone function
    onDrop(acceptedFiles){
      this.setState({
        files: acceptedFiles,
        uploaded: true
      })
  }
  render() {
    return (
    <main className="interface-container">
        <div className="interface">
            <Uploader  onDrop={this.onDrop.bind(this)} >Drop some files here</Uploader>

            <Editor file={this.state.files[0] ? this.state.files[0].preview : ''}
                uploaded={this.state.uploaded}/>
            </div>
    </main>

    );
  }
}

export default App;
