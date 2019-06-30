import React, { Component } from 'react';
import styles from './ProductInBasket.module.css'

class ProductInBasket extends Component {

  render() {

    return (
      <div className={styles.mainWrapper}>
        <div>
          <img
            className='img-thumbnail'
            src={`../${this.props.product.image1}`}
            alt={this.props.product.name}
            width="100"
          ></img>
        </div>
        <div className={styles.wrapperText}>
          {this.props.product.name}
          <br/>
          {this.props.product.company}
        </div>
        
      </div>
    );
  }
}

export default ProductInBasket;