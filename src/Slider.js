import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import image1 from './road.jpg';
import image2 from './mountains.jpg';
import image3 from './autumn.jpg';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  onChange = value => this.setState({ value });

  render() {
    return (
      <div>
        <Carousel
          autoPlay={10000}
          animationSpeed={1000}
          infinite
          value={this.state.value}
          onChange={this.onChange}
          dots
        >
          <img className="img-example" src={image1} alt='img1'/>
          <img className="img-example2" src={image2} alt='img2'/>
          <img className="img-example3" src={image3} alt='img3'/>
        </Carousel>
      </div>
    );
  }
}

export default Slider;