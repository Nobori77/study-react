import React, { Component } from 'react';
import LifeCycleComponent from './LifeCycleComponent';
import matchersStandalone from '@testing-library/jest-dom/matchers';

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16)
}



class LifeCycleContainer extends Component {

  //부모의 초기 컬러는 black

  state = {
    color: "#000000"
  }

  hanldeColorOnclick = () => {
    this.setState({
      color: getRandomColor()
    })
    console.log("부모컬러", this.state.color)
  }

  render() {
    return (
      <div>
        <button onClick={this.hanldeColorOnclick}>색상변경</button>
        <LifeCycleComponent color={this.state.color} />
      </div>
    );
  }
}

export default LifeCycleContainer;