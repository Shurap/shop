import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductById } from '../../api';
import { bindActionCreators } from 'redux';
import { 
  addOneProduct,
  addProductToBasket
 } from '../../actions';

class PageProduct extends Component {

  async componentDidMount() {
    const data = await fetchProductById(this.props.match.params.id);
    this.props.addOneProduct(data);
  }

  render() {

    const { product } = this.props

    return (
      <div>
        <h1>PageProduct</h1>
        <button
          className="btn btn-primary"
          onClick = {() => this.props.addProductToBasket(product.id)}
        >
          Buy it
        </button>
        <div>
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