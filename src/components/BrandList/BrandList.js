import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllBrands } from '../../selectors';
import { bindActionCreators } from 'redux';
import { addBrandLabel } from '../../actions';

class BrandList extends Component {

  handleClick = (e) => {
    this.props.addBrandLabel(e.target.innerHTML);
  }

  render() {

    const arrayBrands = this.props.brands.map((element, index) => {
      return (
        <div
          key={index}
          onClick={this.handleClick}
        >
          {element}
        </div>
      )
    });

    return (
      <div>
        <h4>Brands</h4>
        {arrayBrands}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    brands: getAllBrands(state)
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ addBrandLabel }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BrandList);