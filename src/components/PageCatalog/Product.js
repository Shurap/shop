import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Product.module.css';
import { take } from 'ramda';
import { withRouter } from 'react-router-dom';
import { fetchProductById } from '../../api';
import { bindActionCreators } from 'redux';
import { addOneProduct } from '../../actions';

import MiniImagesList from '../MiniImagesList';

class Product extends Component {

  state = {
    onMouseOver: false,
    mainImage: this.props.product.image1
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product.image1 !== this.props.product.image1) this.setState({ ...this.state, mainImage: this.props.product.image1 })
  }

  onMouseOverComponent = () => {
    this.setState({ onMouseOver: true })
  }

  onMouseLeaveComponent = () => {
    this.setState({ onMouseOver: false })
  }

  onMouseOverMiniImage = (newImage) => {
    this.setState({ mainImage: newImage })
  }

  onMouseLeaveMiniImage = () => {
    this.setState({ mainImage: this.props.product.image1 })
  }

  onClickMiniImage = (newImage) => { }

  onClickDiv = async (product) => {
    const data = await fetchProductById(this.props.match.params.id);
    this.props.addOneProduct(product);

    this.props.history.push(`/product/${product.id}`);
  }

  render() {
    return (
      <div
        className={styles.main}
        onClick={() => this.onClickDiv(this.props.product)}
      >
        <div
          className={(this.state.onMouseOver) ? styles.mainWrapperBig : styles.mainWrapperSmall}
          onMouseOver={this.onMouseOverComponent}
          onMouseLeave={this.onMouseLeaveComponent}
        >
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src={this.state.mainImage}
              alt={this.props.product.name}
            ></img>
          </div>
          <div className={styles.wrapperText}>
            <p>{this.props.product.company}</p>
            <p>{this.props.product.name}</p>
            <h4 className='pull-right'>${this.props.product.price}</h4>
            <p>{`${take(60, this.props.product.description)}...`}</p>
          </div>
          <div className={(this.state.onMouseOver) ? styles.wrapperImgVisible : styles.wrapperImgUnvisible}>
            <MiniImagesList
              product={this.props.product}
              onMouseOverMiniImage={this.onMouseOverMiniImage || null}
              onMouseLeaveMiniImage={this.onMouseLeaveMiniImage || null}
              onClickMiniImage={this.onClickMiniImage || null}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addOneProduct
}, dispatch);

export default connect(null, mapDispatchToProps)(withRouter(Product));