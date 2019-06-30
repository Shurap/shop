import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTotalpriceInBasket, getToBasketProductsWithCount } from '../../selectors';
import ListProductsInBasket from './ListProductsInBasket';

class PageBasket extends Component {

  render() {

    return (
      <div>
        <ListProductsInBasket/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalPrice: getTotalpriceInBasket(state),
    products: getToBasketProductsWithCount(state)
  }
}

export default connect(mapStateToProps)(PageBasket);