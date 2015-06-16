import React from 'react';
const BGURL = require('../../img/tampere.png');

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    }
  }

  render() {
    let style = {
      left: this.state.x,
      top: this.state.y,
      backgroundImage: `url(${BGURL})`
    };

    return (
      <span className='touchthis' style={style} onMouseEnter={(e) => this.move(e)} onMouseDown={this.move}>U can't touch this</span>
    );
  }

  move(e) {
    this.setState({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    });
  }
}
