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
        <div className={styles.imageWrapper}>
          <img
            // className='img-thumbnail'
            className={styles.bigImage}
            src={`../${product.image1}`}
            alt={product.name}
          ></img>
        </div>
        <div className={styles.infoWrapper}>
          <button
            className="btn btn-primary"
            onClick={() => this.props.addProductToBasket(product.id)}
          >
            Buy it
        </button>
          <h4>Company:</h4>
          {product.company}
          <h4>Name:</h4>
          {product.name}
          <h4>Collection:</h4>
          {product.collection}
          <h4>Description:</h4>
          {product.description}
          <h4>Price:</h4>
          {product.price}
        </div>
      </div >
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