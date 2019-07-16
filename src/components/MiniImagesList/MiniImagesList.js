import React, { Component } from 'react';
import MiniImage from './MiniImage';
import styles from './MiniImagesList.module.css'

class MiniImagesList extends Component {

  render() {

    const array = [1, 2, 3, 4, 5];
    const arrayMiniImages = array.map((element, index) => {
      return (
        <MiniImage
          key={index}
          image={`../${this.props.product[`image${element}`]}`}
          name={this.props.product.name}
          onMouseOverMiniImage={this.props.onMouseOverMiniImage || null}
          onMouseLeaveMiniImage={this.props.onMouseLeaveMiniImage || null}
          onClickMiniImage={this.props.onClickMiniImage || null}
        />
      )
    });
    return (
      <div className={styles.wrapper}>
        {arrayMiniImages}
      </div>
    )
  }
}

export default MiniImagesList;