import React from 'react';
const BGURL = require('../../img/tampere.png');

const BGW = 200;
const BGH = 227;

function randomX() {
  Math.floor(Math.random() * (window.innerWidth - BGW + 1));
}

function randomY() {
  Math.floor(Math.random() * (window.innerHeight - BGH + 1));
}

function randomizePos(e) {
  let x = randomX();
  let y = randomY();
  if (x < e.clientX && (x + BGW > e.clientX) &&
      y > e.clientY && (y + BGH > e.clientY)
  ) {
    return randomizePos(e);
  } else {
    return { x, y };
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: BGW,
      height: BGH,

      x: randomX(),
      y: randomY()
    }
  }

  render() {
    let style = {
      width: BGW,
      height: BGH,
      left: this.state.x,
      top: this.state.y,
      backgroundImage: `url(${BGURL})`
    };

    return (
      <span className='touchthis' style={style} onMouseMove={(e) => this.move(e)} onMouseDown={this.move}>U can't touch this</span>
    );
  }

  move(e) {
    this.setState(randomizePos(e));
  }
}
