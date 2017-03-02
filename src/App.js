import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import './App.css';
import AvatarEditor from 'react-avatar-editor'


    class MyEditor extends React.Component {
      constructor(props){
        super(props);
        let initialValues = {
          width: 300,
          height: 250,
          border: 50,
          color: [255, 255, 255, 0.6],
          scale: 1.2,
          rotate: 0,
          scaledImage: ''
        }
        this.state = {
          ...initialValues,
          history: [
            {
              ...initialValues,
              title: 'Initial'
            }
          ]
        };
      }
      addHistory(title){
        let state = {
          title,
          color: this.state.color,
          scale: this.state.scale,
          rotate: this.state.rotate,
        };
        let history = this.state.history.slice(0);
        history.push(state);
        this.setState({history});
      }
      goBackHistory(index){
        // 1) set the state that was in the history at that index
        let { color, scale, rotate } = this.state.history[index];

        // 2) remove items in the history after this index
        let history = this.state.history.slice(0, index);

        this.setState({ color, scale, rotate, history });
      }
      handleScale(event){
        this.setState({
           ...this.state,
          scale: event.target.value,
        });
        this.addHistory('Scale changed');
      }
      handleRed(event){
        let color = this.state.color.slice(0);
        color[0] = event.target.value;
        this.setState({ ...this.state, color });
        this.addHistory('Red changed');
      }
      handleGreen(event){
        let color = this.state.color.slice(0);
        color[1] = event.target.value;
        this.setState({ ...this.state, color });
        this.addHistory('Green changed');
      }
      handleBlue(event){
        let color = this.state.color.slice(0);
        color[2] = event.target.value;
        this.setState({ ...this.state, color });
        this.addHistory('Blue changed');
      }
      handleOpacity(event){
        let color = this.state.color.slice(0);
        color[3] = event.target.value;
        this.setState({ ...this.state, color });
        this.addHistory('Opacity changed');
      }
      handleLeft(event){
        this.setState({
          rotate: this.state.rotate - 90
        })
        this.addHistory('Rotated Left');
      }
      handleRight(event){
        this.setState({
          rotate: this.state.rotate + 90
        })
        this.addHistory('Rotated Right');
      }
      handlePreview(e){
        const canvasScaled = this.editor.getImageScaledToCanvas();

        this.setState({
          scaledImage: canvasScaled.toDataURL()
        })

      }
      setEditorRef (editor) {
        if (editor) this.editor = editor
      }

      render () {
        return (
          <div>
            <div className="image-editor-container">

              <div className="range-slider">Zoom:
                <input type="range" onChange={this.handleScale.bind(this)} value={this.state.scale}/>
              </div>
              <div className="red-color-slider">Border Red:
                <input type="range" onChange={this.handleRed.bind(this)} value={this.state.color[0]}/>
              </div>
              <div className="green-color-slider">Border Green:
                <input type="range" onChange={this.handleGreen.bind(this)} value={this.state.color[1]}/>
              </div>
              <div className="blue-color-slider">Border Blue:
                <input type="range" onChange={this.handleBlue.bind(this)} value={this.state.color[2]}/>
              </div>
              <div className="opacity-color-slider">Border Opacity:
                <input type="range" onChange={this.handleOpacity.bind(this)} value={this.state.color[3]}/>
              </div>

              <button className="rotate-left"     onClick={this.handleLeft.bind(this)}>Rotate Left
              </button>

              <button className="rotate-right"  onClick={this.handleRight.bind(this)}>Rotate Right
              </button>

              <button className="preview" onClick={this.handlePreview.bind(this)}>Preview
              </button>

            </div>

            <AvatarEditor
              ref={this.setEditorRef.bind(this)}
              image={this.props.url}
              width={this.state.width}
              height={this.state.height}
              border={this.state.border}
              color={this.state.color} // RGBA
              scale={this.state.scale}
              rotate={this.state.rotate}
            />

            <img src={this.state.scaledImage} />


            <div className="History">{this.state.history.map((item,i) => {
              return <div key={i} onClick={this.goBackHistory.bind(this, i)}>{item.title}</div>
            })}</div>
          </div>
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
              {this.state.files.map( function(file, i){ return <img key={i} src={file.preview} />; } ) }</div>
          </div> : null
        }
      </div>
    );
  }
}

export default App;
