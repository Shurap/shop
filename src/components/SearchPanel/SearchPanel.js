import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSearchLabel } from '../../actions';
import styles from './SearchPanel.module.css';

class SearchPanel extends Component {

  onChange = (e) => {
    this.props.addSearchLabel(e.target.value);
  }

  render() {
    return (
      <div className={styles.mainWrapper}>
        <h4>Search</h4>
        <input
          className='form-control'
          type='text'
          onChange={this.onChange}
          value={this.props.searchLabel}
          placeholder="Product name"
          autoComplete="off"
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ searchLabel: state.search.searchLabel });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addSearchLabel
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);