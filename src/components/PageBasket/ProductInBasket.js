import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  changeProductCountInBasket,
  deleteProductFromBasket
} from '../../actions';
import styles from './ProductInBasket.module.css'

class ProductInBasket extends Component {

  onChange = (e) => {
    this.props.changeProductCountInBasket(e.target.value, this.props.product.id);
  }

  onClickButtonDelete = (id) => {
    this.props.deleteProductFromBasket(id);
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
        <div className={styles.wrapperButton}>
          <button 
            className={styles.buttonDelete}
            onClick={() => this.onClickButtonDelete(this.props.product.id)}
          >
            delete
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeProductCountInBasket,
  deleteProductFromBasket
}, dispatch);

export default connect(null, mapDispatchToProps)(ProductInBasket);