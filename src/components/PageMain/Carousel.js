import React, { Component } from 'react';
import styles from './Carousel.module.css';

const imgUrls = ['upload/carousel/1.jpg', 'upload/carousel/2.jpg', 'upload/carousel/3.jpg', 'upload/carousel/4.jpg']

class Carousel extends Component {

  state = {
    currentImageIndex: 0
  };

  previousSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render() {

    const ImageSlide = ({ url }) => {
      const style = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };

      return (
        <div className={styles.imageSlide} style={style}></div>
      );
    }

    return (
      <div className={styles.carousel}>
        <img
          className={styles.left}
          src="upload/carousel/left.png"
          onClick={this.previousSlide}
        >
        </img>
        <ImageSlide url={imgUrls[this.state.currentImageIndex]} />
        <img
          className={styles.right}
          src="upload/carousel/right.png"
          onClick={this.nextSlide}
        >
        </img>
      </div>
    );


  }
}

export default Carousel;