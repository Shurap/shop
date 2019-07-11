import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  getCountProductsInBasket,
  getTotalpriceInBasket
} from '../../selectors';
import styles from './Basket.module.css'

class Basket extends Component {
  render() {
    return (
      <div>
        {/* <h4>Basket {this.props.countProductsInBasket} {this.props.totalPriceInBasket}</h4> */}
        <p className={styles.text}>{this.props.countProductsInBasket}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    countProductsInBasket: getCountProductsInBasket(state),
    totalPriceInBasket: getTotalpriceInBasket(state)
  }
}

export default connect(mapStateToProps)(Basket);