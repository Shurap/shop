import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductById } from '../../api';
import { bindActionCreators } from 'redux';
import MiniImagesList from '../MiniImagesList';
import {
  addOneProduct,
  addProductToBasket
} from '../../actions';
import styles from './PageProduct.module.css';

class PageProduct extends Component {

  state = {
    mainImage: this.props.product.image1
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product.image1 !== this.props.product.image1) this.setState({...this.state, mainImage: this.props.product.image1}) 
  }
  
  async componentDidMount() {
    const data = await fetchProductById(this.props.match.params.id);
    this.props.addOneProduct(data);
  }

  onMouseOverMiniImage = (newImage) => {}

  onMouseLeaveMiniImage = () => {}

  onClickMiniImage = (newImage) => {
    this.setState({ mainImage: newImage })
  }

  render() {

    const { product } = this.props

    return (
      <div className={styles.mainWrapper}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.bigImage}
            src={`../${this.state.mainImage}`}
            alt={product.name}
          ></img>
          <div className={styles.miniImagesList}>
            <MiniImagesList
              product={product}
              onMouseOverMiniImage={this.onMouseOverMiniImage || null}
              onMouseLeaveMiniImage={this.onMouseLeaveMiniImage || null}
              onClickMiniImage={this.onClickMiniImage || null}
            />
          </div>
        </div>
        <div className={styles.infoWrapper}>
          <h4>Company:</h4>
          {product.company}
          <div className={styles.lines}></div>
          <h4>Name:</h4>
          {product.name}
          <div className={styles.lines}></div>
          <h4>Collection:</h4>
          {product.collection}
          <div className={styles.lines}></div>
          <h4>Description:</h4>
          {product.description}
          <div className={styles.lines}></div>
          <h4>Price:</h4>
          <h4 className='pull-right'>${product.price}</h4>
          <div className={styles.lines}></div>
          <button
            className={styles.buttons}
            onClick={() => this.props.addProductToBasket(product.id)}
          >
            Buy it
          </button>
          <button 
            className={styles.buttons}
            onClick={() => this.props.history.push('/catalog')}
          >
            back to catalog
          </button>
        </div>
      </div >
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