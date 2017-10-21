import React, { Component } from 'react';
import Slide from './Slide';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import Dots from './Dots';
import '../../styles/Slider.scss';


class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: [
        'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?fit=crop&fm=jpg&h=825&q=80&w=1325',
        'https://images.unsplash.com/photo-1445251836269-d158eaa028a6?fit=crop&fm=jpg&h=825&q=80&w=1325',
        'https://images.unsplash.com/photo-1443926818681-717d074a57af?fit=crop&fm=jpg&h=825&q=80&w=1325',
      ],
      current: 0,
    };
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.dotClick = this.dotClick.bind(this);
  }

  previousSlide() {
    const obj = Object.assign({}, this.state);
    const current = obj.current;
    const imageArray = obj.background.length - 1;

    if (current >= 1) this.setState({ current: current - 1 });
    if (current === 0) this.setState({ current: imageArray });
  }

  nextSlide() {
    const obj = Object.assign({}, this.state);
    const current = obj.current;
    const imageArray = obj.background.length - 1;

    if (current >= 0 && current !== imageArray) this.setState({ current: current + 1 });
    if (current === imageArray) this.setState({ current: 0 });
  }

  dotClick(dotIndex) {
    const obj = Object.assign({}, this.state);
    let current = obj.current;
    current = dotIndex;
    this.setState({ current });
  }

  render() {
    return (
      <div className="slider">
        {
          <Slide
            background={this.state.background}
            current={this.state.current}
          />
        }
        <LeftArrow previousSlide={this.previousSlide} />
        <RightArrow nextSlide={this.nextSlide} />
        <Dots
          numberOfDots={this.state.background.length}
          isCurrent={this.state.current}
          dotClick={this.dotClick}
        />
      </div>
    );
  }
}

export default Slider;
