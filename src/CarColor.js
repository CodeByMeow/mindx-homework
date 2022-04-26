import React, { Component } from "react";

class CarColor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgsources: {
        red: '/images/red-car.png',
        black: '/images/black-car.png',
        white: '/images/white-car.png',
      },
      currentImg: '/images/black-car.png',
    }
  }

  onSelectColor = (color) => {
    this.setState({
      currentImg: this.state.imgsources[color]
    })
  }

  render() {
    const imgsrc = this.state.currentImg;
    return (
      <div className="car-section">
        <div className="car-img">
          <p>Please select your car's color</p>
          <img src={imgsrc} />
        </div>
        <div className="car-summary" >
          <p>Change color</p>
          <button className="btn red" onClick={() => this.onSelectColor('red')}>Red color</button>
          <button className="btn black" onClick={() => this.onSelectColor('black')}>Black color</button>
          <button className="btn white" onClick={() => this.onSelectColor('white')}>White color</button>
        </div>
      </div>
    )
  }
}

export default CarColor
