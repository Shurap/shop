import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductById } from '../../api';
import { bindActionCreators } from 'redux';
import { 
  addOneProduct,
  addProductToBasket
 } from '../../actions';
 import styles from './PageProduct.module.css';

class PageProduct extends Component {

  async componentDidMount() {
    const data = await fetchProductById(this.props.match.params.id);
    this.props.addOneProduct(data);
  }

  render() {

    const { product } = this.props
    // console.log('product', product)

    return (
      <div className={styles.mainWrapper}>
        <h1>PageProduct</h1>
        <button
          className="btn btn-primary"
          onClick = {() => this.props.addProductToBasket(product.id)}
        >
          Buy it
        </button>
        <div className={styles.productWrapper}>
          <img
            className='img-thumbnail'
            src={`../${product.image1}`}
            alt={product.name}
          ></img>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ 
  addOneProduct,
  addProductToBasket 
}, dispatch);

const mapStateToProps = (state) => {
  return { product: state.oneProduct }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageProduct);