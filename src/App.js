import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import AvatarEditor from 'react-avatar-editor'
import Slider from './components/Slider'


    class MyEditor extends React.Component {
      constructor(props){
        super(props);
//set all properties to variable initialValues
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
//import initialValues variable as state, using key/value pairs as state
          ...initialValues,
//set history as the all the original initialValues and a title
          history: [
            {
              ...initialValues,
                title: 'Initial'
            }
          ]
        };
      }



//WHEN CALLED ADDHISTORY BELOW, TAKES IN TITLE TO APPEAR
//PROPERTIES AND THEIR STATE + TITLE ARE BUNDLED,
      addHistory(title){
        let state = {
          title,
          color: this.state.color,
          scale: this.state.scale,
          rotate: this.state.rotate,
        };
//CREATE SHALLOW COPY OF THE HISTORY-
// THIS HAPPENS WHENEVER AN NEW PIECE OF HISTORY HAPPENS
        let history = this.state.history.slice(0);
// WHENEVER THE HISTORY CHANGES, THE CHANGE IS SLICED OFF AND PUSHED INTO THE HISTORY ARRAY?
//CREATED IN THIS.STATE


////title practicing///////////////
        // let current_title;
        var titles = [];
        // comes form the handle method
        titles.push(state.title)
        // if (title === this.state.history){
        //
        // }
        // console.log(state.title)
        // console.log(current_title)
        // console.log(titles)
        // console.log(title)
        history.push(state);
        this.setState({history});
        // setstate to the new value of history
      }


      resetHistory(){
// access history varilble = no acces to photo b/c of scope
       let history = this.state.history
       history.length = 1;
       let file = this.props.file;
       file.length = 0
       this.setState({history,file}
       );
       // setstate to the new value of history, which here is nothing but initial
     }

      goBackHistory(index){
// set all the properies to be whatever they were at this point in history
        console.log(index)
        let { color, scale, rotate } = this.state.history[index];

// then set the history itself to slice from the beginning up until this time -this is how if goes backwards
        let history = this.state.history.slice(0, index);
//change the state to equal those settings
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
//avatar-editor method- put our changed image into this variable
      handlePreview(e){
        const canvasScaled = this.editor.getImageScaledToCanvas();
//put out final product inside the scaledImage container, made back in initialValues as blank
//GIVEN THIS ANSWER- call .toDataURL() on this image, returning dataurl represnation of image
        this.setState({
          scaledImage: canvasScaled.toDataURL()
        })

      }
//avatar-editor function -  just copied from docs, matches ref in body of component
      setEditorRef (editor) {
        if (editor) this.editor = editor
      }

      render () {
        return (
          <div>
            <div className="image-editor-container">

              <Slider onChange={this.handleScale.bind(this)} value={this.state.scale}/>
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

              <button className="reset" onClick={this.resetHistory.bind(this)}>Reset
              </button>

            </div>

            <div className="history-container">
              Use scroll bar- click to go back to event
              {this.state.history.map((item,i) => {

                return (
                  <div className="history-return">
                    {/* index comes from binding i to the method call                    */}
                    <div key={i} onClick={this.goBackHistory.bind(this, i)}>{item.title}
                      {/* binding the i acts as index to keep each point attacted to number, so it is possile to go back */}
                    </div>
                  </div>
                )
              })}</div>

            <AvatarEditor
//bind to setEditorRef function above
              ref={this.setEditorRef.bind(this)}
//image coming from Dropzone
              image={this.props.file}
              uploaded={this.props.uploaded}
              width={this.state.width}
              height={this.state.height}
              border={this.state.border}
              color={this.state.color} // RGBA
              scale={this.state.scale}
              rotate={this.state.rotate}
            />
{/* scaled image rendered here */}
            <img src={this.state.scaledImage} />



          </div>
        )
      }
    }

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
        <Dropzone onDrop={this.onDrop.bind(this)} >Drop some files here</Dropzone>
        </div>


{/* rendering the editor here- passing the url of droped photo back as props */}
        <div className="my-editor">
          <MyEditor file={this.state.files[0] ? this.state.files[0].preview : ''}
          uploaded={this.state.uploaded}/>
        </div>

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
