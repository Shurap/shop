import React, { Component } from 'react';
import { fetchProducts } from '../../api';
import { addAllProducts } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListProducts from './ListProducts';

class PageCatalog extends Component {

  async componentWillMount() {
    const data = await fetchProducts();
    this.props.addAllProducts(data);
  }

  render() {
    return (
      <div>
        <h1>PageCatalog</h1>
        <ListProducts />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ addAllProducts }, dispatch);

export default connect(null, mapDispatchToProps)(PageCatalog);