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
    onDrop(acceptedFiles){
      this.setState({
        files: acceptedFiles,
        uploaded: true
      })
  }
  render() {
    return (
      <main className="interface">

        <div className="uploader">
        <Uploader onDrop={this.onDrop.bind(this)} >Drop some files here</Uploader>
        </div>


{/* rendering the editor here- passing the url of droped photo back as props */}

          <Editor className="my-editor" file={this.state.files[0] ? this.state.files[0].preview : ''}
          uploaded={this.state.uploaded}/>

        {/* from Dropzone docs- function to render image -  */}
        {/* { this.state.files.length > 0 ?
          <div className="hold-filesOe">
            <div className="map-files">
              {this.state.files.map( function(file, i){ return <img key={i} src={file.preview} />; } ) }</div>
          </div> : null
        } */}
      </main>


    );
  }
}

export default App;


// OLD BUSTED function
// <div className="history">{this.state.history.map((item,index) => {index
//   if (item.title !== item[item.length -1]){
//   return (
//             <div key={index} onClick={this.goBackHistory.bind(this,index)}>
//             {item.title}
//             </div>
//           )
//         }
//         })
//       }
//   </div>
