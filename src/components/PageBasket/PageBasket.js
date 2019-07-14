import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getTotalpriceInBasket,
  getCountProductsInBasket,
} from '../../selectors';
import ListProductsInBasket from './ListProductsInBasket';
import styles from './PageBasket.module.css';

class PageBasket extends Component {

  render() {
    return (
      <div className={styles.mainWrapper}>
        <div className={styles.headWrapper}>
          <div className={styles.countWrapper}>
            <h2>Your basket</h2>
            <p>({this.props.countProducts} items)</p>
          </div>
          <div className={styles.priceWrapper}>
            Total price: ${this.props.totalPrice}
          </div>
        </div>
        <ListProductsInBasket />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalPrice: getTotalpriceInBasket(state),
    countProducts: getCountProductsInBasket(state)
  }
}

export default connect(mapStateToProps)(PageBasket);