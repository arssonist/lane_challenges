import React, { Component } from 'react';
import AvatarEditor from 'react-avatar-editor'
import Editor from './components/Editor'
import Uploader from './components/Uploader'

class App extends React.Component {
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
      console.log(this.state.files)
  }
  render() {
    return (
    <main className="interface-container">
        <div className="interface">
            <Editor file={this.state.files[0] ? this.state.files[0].preview : ''}
                uploaded={this.state.uploaded} uploadedFiles={this.state.files}/>

            <Uploader onDrop={this.onDrop.bind(this)} ></Uploader>

            </div>
    </main>

    );
  }
}

export default App;
