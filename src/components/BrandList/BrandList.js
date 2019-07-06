import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllBrands } from '../../selectors';
import { bindActionCreators } from 'redux';
import { addBrandLabel } from '../../actions';
import styles from './BrandList.module.css';

class BrandList extends Component {

  addBrand = (e) => {
    this.props.addBrandLabel(e.target.innerHTML);
  }

  clearBrand = () => {
    this.props.addBrandLabel('');
  }

  render() {

    const arrayBrands = this.props.brands.map((element, index) => {
      return (
        <div
          className={(this.props.brandLabel === element) ? styles.textWrapperBorderOn : styles.textWrapperBorderOff}
          key={index}
          onClick={this.addBrand}
        >
          {element}
        </div>
      )
    });

    return (
      <div className={styles.mainWrapper}>
        <h4>Brands</h4>
        <div
          className={(this.props.brandLabel === '') ? styles.textWrapperBorderOn : styles.textWrapperBorderOff}
          onClick={this.clearBrand}
        >
          all
        </div>
        {arrayBrands}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    brands: getAllBrands(state),
    brandLabel: state.brand.brandLabel
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ addBrandLabel }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BrandList);