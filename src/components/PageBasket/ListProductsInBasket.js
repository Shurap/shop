import React, { Component } from 'react';
import ProductInBasket from './ProductInBasket';
import { connect } from 'react-redux';
import { getTotalpriceInBasket, getToBasketProductsWithCount } from '../../selectors';

class ListProductsInBasket extends Component {

  render() {
    const arrayProducts = this.props.products.map((element, index) => {
      return (
        <tbody key={index}>
          <ProductInBasket
            product={element}
          />
        </tbody>
      )
    });

    return (
      <div className='table-responsive'>
        <table className='table-bordered table-striped table-condensed cf'>
          {arrayProducts}
        </table>
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