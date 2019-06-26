import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountProductsInBasket } from '../../selectors';

class Basket extends Component {
  render() {
    return (
      <div>
        <h4>Basket {this.props.countProductsInBasket}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { countProductsInBasket: getCountProductsInBasket(state) }
}

export default connect(mapStateToProps)(Basket);