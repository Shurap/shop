import React, { Component } from 'react';
import styles from './ProductInBasket.module.css'

class ProductInBasket extends Component {

  render() {
    return (
      <tr>
        <td className='first-column-checkout'>
          <img
            className='img-thumbnail'
            src={`../${this.props.product.image1}`}
            alt={this.props.product.name}
            width="100"
          ></img>
        </td>
        <td>
          {this.props.product.name}
        </td>
        <td>
          {this.props.product.company}
        </td>
        <td>
          {this.props.product.price}
        </td>
        <td>
          {this.props.product.count}
        </td>
      </tr>
    );
  }
}

export default ProductInBasket;