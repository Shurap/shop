import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../selectors';
import Product from './Product';
import styles from './ListProducts.module.css'

class ListProducts extends Component {

  render() {
    const arrayProducts = this.props.products.map((element, index) => {
      return (
        <div key={index}>
          <Product
            product={element}
          />
        </div>
      )
    });

    return (
      <div className={styles.mainWrapper}>
        {arrayProducts}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { products: getProducts(state) }
}

export default connect(mapStateToProps)(ListProducts);