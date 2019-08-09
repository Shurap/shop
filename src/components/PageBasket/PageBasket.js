import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearBasket } from '../../actions';
import {
  getTotalpriceInBasket,
  getCountProductsInBasket,
} from '../../selectors';
import ListProductsInBasket from './ListProductsInBasket';
import styles from './PageBasket.module.css';

class PageBasket extends Component {

  onBuyAll = () => {
    const dataToServer = this.props.purchasedProducts.map(element => {
      return {id: element.id, count: element.count}
    });
    const sendToServer = JSON.stringify(dataToServer);
    console.log(sendToServer);
    this.props.clearBasket();
  }

  render() {
    return (
      <div className={styles.mainWrapper}>
        <div className={styles.headWrapper}>
          <div className={styles.countWrapper}>
            <h2>Your basket</h2>
            <p>({this.props.countProducts} items)</p>
          </div>
          <div className={styles.priceWrapper}>
            Total price: ${this.props.totalPrice}
          </div>
        </div>
        <ListProductsInBasket />
        <button 
          className={styles.button}
          onClick={this.onBuyAll}
        >
          buy now
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalPrice: getTotalpriceInBasket(state),
    countProducts: getCountProductsInBasket(state),
    purchasedProducts: state.productsInBasket
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  clearBasket
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PageBasket);