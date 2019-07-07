import React, { Component } from 'react';
import MiniImage from './MiniImage';
// import styles from './MiniImagesList.module.css'

class MiniImagesList extends Component {

  render() {

    const array = [1, 2, 3, 4, 5];
    const arrayMiniImages = array.map((element, index) => {
      // console.log(index)
      return (
        // <div key={index}>
        <MiniImage
          key={index}
          image={`../${this.props.product[`image${element}`]}`}
          name={this.props.product.name}
          onMouseOverMiniImage={this.props.onMouseOverMiniImage || null}
          onMouseLeaveMiniImage={this.props.onMouseLeaveMiniImage || null}
          onClickMiniImage={this.props.onClickMiniImage || null}
        />
        // </div>
      )
    });
    // console.log(arrayMiniImages)
    return (
      <div>
        {arrayMiniImages}
      </div>
    )
  }
}

export default MiniImagesList;