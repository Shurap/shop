import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  getCountProductsInBasket,
  getTotalpriceInBasket
} from '../../selectors';

class Basket extends Component {
  render() {
    return (
      <div>
        <h4>Basket {this.props.countProductsInBasket} {this.props.totalPriceInBasket}</h4>
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