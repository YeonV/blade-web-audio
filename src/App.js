import React, { Component } from 'react';
import AudioAnalyser from './AudioAnalyser';
import { YZelements } from './YZelements';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: null
    };
    this.toggleMicrophone = this.toggleMicrophone.bind(this);
  }

  async getMicrophone() {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    this.setState({ audio });
  }

  stopMicrophone() {
    this.state.audio.getTracks().forEach(track => track.stop());
    this.setState({ audio: null });
  }

  toggleMicrophone() {
    if (this.state.audio) {
      this.stopMicrophone();
    } else {
      this.getMicrophone();
    }
  }

  render() {
    return (
      <div className="App">
        <div className="controls">
          <button onClick={this.toggleMicrophone}>
            {this.state.audio ? 'Stop microphone' : 'Get microphone input'}
          </button>
        </div>
        {this.state.audio ? <AudioAnalyser audio={this.state.audio} /> : <div />}
        {/* {this.state.audio ? <AudioAnalyser audio={this.state.audio} /> : <div style={{ height: '340px' }} />} */}
        <div className="content">
        
        {!this.state.audio && <YZelements toggleB={this.state.audio ? true : false}  />}
          
        
          {/* {this.state.audio ? <YZelements toggleB={this.state.audio ? true : false} audio={this.state.audio} /> : <div style={{ height: '340px' }} />} */}
        </div>
      </div>
    );
  }
}

export default App;
