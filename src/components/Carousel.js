import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(){
    super()
    this.state={
      num:0
    }
  }
  handleRightArrow = () => {
    if (this.state.num < images.length - 1) {
      this.setState({ num: this.state.num + 1 });
    }
  };

  handleLeftArrow = () => {
    if (this.state.num > 0) {
      this.setState({ num: this.state.num - 1 });
    }
  };

  render(){
    console.log(images[0])
    return(
      <div className="container">
          <div className="image-container">
            <div className="arrow left" onClick={this.handleLeftArrow}><ArrowBackIosIcon /></div>
            <h1 className="title">{images[this.state.num].title}</h1>
            <img src={images[this.state.num].img} alt=''/>
            <h3 className="subtitle">{images[this.state.num].subtitle}</h3>
            <div className="arrow right" onClick={this.handleRightArrow}><ArrowForwardIosIcon /></div>
          </div>
      </div>
    )
  }
}

export default Carousel;