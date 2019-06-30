import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSearchLabel } from '../../actions';

class SearchPanel extends Component {

  onChange = (e) => {
    this.props.addSearchLabel(e.target.value);
  }

  render() {
    return (
      <div className='well blosd'>
        <h3 className='lead'>Search</h3>
        <input
          className='form-control'
          type='text'
          onChange={this.onChange}
          value={this.props.searchLabel}
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