import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addProductToBasket
} from '../../actions';
import styles from './ProductInBasket.module.css'

class ProductInBasket extends Component {

  onChange = (e) => {
    console.log ('value', e.target.value);
    console.log('count', this.props.product.count);
    console.log('id', this.props.product.id);

    this.props.product.count = e.target.value;


  }

  render() {    
    return (
      <div className={styles.mainWrapper}>
        <div>
          <img
            className={styles.image}
            src={`../${this.props.product.image1}`}
            alt={this.props.product.name}
          ></img>
        </div>
        <div className={styles.wrapperText}>
          <h4>{this.props.product.name}</h4>
          <p>Company: {this.props.product.company}</p>
          <p>Collection: {this.props.product.collection}</p>
        </div>
        <div className={styles.wrapperPrice}>
          <h4>${this.props.product.price}</h4>
          <p>x</p>
        </div>
        <div className={styles.wrapperSelect}>
          <select 
            className={styles.select} 
            onChange={this.onChange}
            defaultValue={this.props.product.count}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </select>
        </div>
        <div className={styles.wrapperSumm}>
          <h4>${this.props.product.count * this.props.product.price}</h4>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addProductToBasket
}, dispatch);

const mapStateToProps = (state) => {
  return { productsInBasket: state.productsInBasket }
}

// export default ProductInBasket;

export default connect(mapStateToProps, mapDispatchToProps)(ProductInBasket);