import React, { Component } from 'react';
import SearchPanel from '../SearchPanel';
import BrandList from '../BrandList';
import SortPanel from '../SortPanel';
import styles from './SideMenu.module.css';

class SideMenu extends Component {
  state = {
    visible: true
  }

  onToggleVisible = () => {
    this.setState({ ...this.state, visible: !this.state.visible })
  }

  render() {

    return (
      <div className={styles.mainWrapper}>
        <div className={(this.state.visible) ? styles.visibleTrue : styles.visibleFalse}>
          <SearchPanel />
          <SortPanel />
          <BrandList />
        </div>
        <div className={styles.buttonWrapper}>
          <button
            className={(this.state.visible) ? styles.buttonVisibleTrue : styles.buttonVisibleFalse}
            onClick={this.onToggleVisible}
          >
          </button>
        </div>
      </div >
    );
  }
}

export default SideMenu;