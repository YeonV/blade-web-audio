import React, { Component } from 'react';
import AudioVisualiser from './AudioVisualiser';
import AudioSpectrum from 'react-audio-spectrum';
import { YZelements } from './YZelements';

class AudioAnalyser extends Component {
  constructor(props) {
    super(props);
    this.state = { audioData: new Uint8Array(0) };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.analyser = this.audioContext.createAnalyser();
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.source = this.audioContext.createMediaStreamSource(this.props.audio);
    this.source.connect(this.analyser);
    this.rafId = requestAnimationFrame(this.tick);
  }

  tick() {
    this.analyser.getByteTimeDomainData(this.dataArray);
    this.setState({ audioData: this.dataArray });
    this.rafId = requestAnimationFrame(this.tick);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rafId);
    this.analyser.disconnect();
    this.source.disconnect();
  }

  render() {
    return (
    <div>
      <AudioVisualiser audioData={this.state.audioData} />
      
      <AudioSpectrum
        // id="audio-canvas"
        height={200}
        width={300}
        audioEle={this.state.audioData}
        capColor={'red'}
        capHeight={2}
        meterWidth={2}
        meterCount={512}
        meterColor={[
          {stop: 0, color: '#f00'},
          {stop: 0.5, color: '#0CD7FD'},
          {stop: 1, color: 'red'}
        ]}
        gap={4}
      />
       <div className="content">
      <YZelements audio={this.state.audioData} toggleB={true} />
      </div>
    </div>
    )
  }
}

export default AudioAnalyser;
