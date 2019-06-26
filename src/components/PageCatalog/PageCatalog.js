import React, { Component } from 'react';
import { fetchProducts } from '../../api';
import { addAllProducts } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListProducts from './ListProducts';
import SideMenu from './SideMenu';
import styles from './PageCatalog.module.css';

class PageCatalog extends Component {

    async componentDidMount() {
    const data = await fetchProducts();
    this.props.addAllProducts(data);
  }

  render() {
    return (
      <div className={styles.mainWrapper}>
          {/* <h1>PageCatalog</h1> */}
        <SideMenu />  
        <ListProducts />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ addAllProducts }, dispatch);

export default connect(null, mapDispatchToProps)(PageCatalog);