import React, { Component } from 'react';
import Carousel from './Carousel'
import Text from './Text'
import styles from './PageMain.module.css'

class PageMain extends Component {
  render() {
    return (
      <div className={styles.mainWrapper}>
        <h2 className={styles.name}>MEN • SKATEBOARDING • SHOES</h2>
        <Carousel />
        <button
          className={styles.button}
          onClick={() => this.props.history.push('/catalog')}
        >
          forward to catalog
        </button>
        <Text />
      </div>
    );
  }
}

export default PageMain;