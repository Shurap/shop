import React, { Component } from 'react';
import styles from './Product.module.css';
import MiniImage from './MiniImage';
import { take } from 'ramda';
import { Link } from 'react-router-dom';

class Product extends Component {

  state = {
    onMouseOver: false,
    mainImage: this.props.product.image1
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product.image1 !== this.props.product.image1) this.setState({...this.state, mainImage: this.props.product.image1}) 
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

  render() {
    return (
      <div className={styles.main}>
        <Link
          to={`/product/${this.props.product.id}`}
          // className="link-unstyled"
        >
          <div
            className={(this.state.onMouseOver) ? styles.mainWrapperBig : styles.mainWrapperSmall}
            onMouseOver={this.onMouseOverComponent}
            onMouseLeave={this.onMouseLeaveComponent}
          >
            <img
              className='img-thumbnail'
              src={this.state.mainImage}
              // width="300"
              // height="200"
              alt={this.props.product.name}
            ></img>
            <div className={styles.wrapperText}>
              <p>{this.props.product.company}</p>
              <p>{this.props.product.name}</p>
              <h4 className='pull-right'>${this.props.product.price}</h4>
              <p>{`${take(60, this.props.product.description)}...`}</p>
            </div>
            <div className={(this.state.onMouseOver) ? styles.wrapperImgVisible : styles.wrapperImgUnvisible}>
              <MiniImage
                image={this.props.product.image1}
                name={this.props.product.name}
                onMouseOverMiniImage={this.onMouseOverMiniImage}
                onMouseLeaveMiniImage={this.onMouseLeaveMiniImage}
              />
              <MiniImage
                image={this.props.product.image2}
                name={this.props.product.name}
                onMouseOverMiniImage={this.onMouseOverMiniImage}
                onMouseLeaveMiniImage={this.onMouseLeaveMiniImage}
              />
              <MiniImage
                image={this.props.product.image3}
                name={this.props.product.name}
                onMouseOverMiniImage={this.onMouseOverMiniImage}
                onMouseLeaveMiniImage={this.onMouseLeaveMiniImage}
              />
              <MiniImage
                image={this.props.product.image4}
                name={this.props.product.name}
                onMouseOverMiniImage={this.onMouseOverMiniImage}
                onMouseLeaveMiniImage={this.onMouseLeaveMiniImage}
              />
              <MiniImage
                image={this.props.product.image5}
                name={this.props.product.name}
                onMouseOverMiniImage={this.onMouseOverMiniImage}
                onMouseLeaveMiniImage={this.onMouseLeaveMiniImage}
              />
            </div>
            {/* <Link to={`/product/${this.props.product.id}`}>Info</Link> */}
          </div>
        </Link>
      </div>
    );
  }
}

export default Product;