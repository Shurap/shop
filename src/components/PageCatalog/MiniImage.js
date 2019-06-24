import React, { Component } from 'react';
import styles from './MiniImage.module.css'

class MiniImage extends Component {

  render() {
    return (
      <img
      className={styles.miniImage}
        src={this.props.image}
        width="58"
        alt={this.props.name}
        onMouseOver={() => this.props.onMouseOverMiniImage(this.props.image)}
        onMouseLeave={this.props.onMouseLeaveMiniImage}
      >
      </img>
    )
  }
}

export default MiniImage;