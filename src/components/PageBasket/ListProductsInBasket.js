import React, { Component } from 'react';
import ProductInBasket from './ProductInBasket';
import { connect } from 'react-redux';
import { getTotalpriceInBasket, getToBasketProductsWithCount } from '../../selectors';

class ListProductsInBasket extends Component {


  render() {

    const arrayProducts = this.props.products.map((element, index) => {
      return (
        <div key={index}>
          <ProductInBasket
            product={element}
          />
        </div>
      )
    });

    return (
      <div>
        {arrayProducts}
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

export default connect(mapStateToProps)(ListProductsInBasket);