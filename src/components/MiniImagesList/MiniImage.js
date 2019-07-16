import React, { Component } from 'react';
import styles from './MiniImage.module.css'

class MiniImage extends Component {

  render() {
    return (
      <div className={styles.imageWrapper}>
        <img
          className={styles.miniImage}
          src={this.props.image}
          alt={this.props.name}
          onMouseOver={() => this.props.onMouseOverMiniImage(this.props.image) || null}
          onMouseLeave={this.props.onMouseLeaveMiniImage || null}
          onClick={() => this.props.onClickMiniImage(this.props.image) || null}
        >
        </img>
      </div>
    )
  }
}

export default MiniImage;