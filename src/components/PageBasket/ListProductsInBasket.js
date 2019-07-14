import React, { Component } from 'react';
import ProductInBasket from './ProductInBasket';
import { connect } from 'react-redux';
import styles from './ListProductsInBasket.module.css';

class ListProductsInBasket extends Component {

  render() {
    const arrayProducts = this.props.products.map((element, index) => {
      return (
        <div key={index}>
        <div className={styles.lines}></div>
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
    products: state.productsInBasket
  }
}

export default connect(mapStateToProps)(ListProductsInBasket);