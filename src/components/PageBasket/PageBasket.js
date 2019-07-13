import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  getTotalpriceInBasket, 
  getToBasketProductsWithCount,
  getCountProductsInBasket,
} from '../../selectors';
import ListProductsInBasket from './ListProductsInBasket';
import styles from './PageBasket.module.css';

class PageBasket extends Component {

  render() {
    return (
      <div className={styles.mainWrapper}>
        <h2>Your basket</h2>
        <p>({this.props.countProducts} items)</p>

        <ListProductsInBasket/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalPrice: getTotalpriceInBasket(state),
    products: getToBasketProductsWithCount(state),
    countProducts: getCountProductsInBasket(state)
  }
}

export default connect(mapStateToProps)(PageBasket);