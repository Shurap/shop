import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductById } from '../../selectors';

class PageProduct extends Component {
  render() {

    // console.log(this.props.product.image1);
    const {product} = this.props

    return (
      <div>
        <h1>PageProduct</h1>
        <img 
          src={product && product.image1}
          alt={product && product.name}
        ></img>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {product: getProductById(state, id)}
}

export default connect(mapStateToProps)(PageProduct);