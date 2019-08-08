import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSortLabel } from '../../actions';
import styles from './SortPanel.module.css';

class SortPanel extends Component {

  onChange = (e) => { this.props.addSortLabel(e.target.value) }

  render() {
    return (
      <div className={styles.mainWrapper}>
        <h4>Sort By</h4>
        <select
          className={styles.select}
          onChange={this.onChange}
        >
          <option>---</option>
          <option>Price (low - high)</option>
          <option>Price (high - low)</option>
          <option>Company</option>
          <option>Name</option>
        </select>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ addSortLabel }, dispatch);

export default connect(null, mapDispatchToProps)(SortPanel);