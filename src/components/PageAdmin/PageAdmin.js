import React, { Component } from 'react';
import DB from '../../api/productsDB.js'
import {append} from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addDataFromAdmin} from '../../actions';

class PageAdmin extends Component {

  onSend = () => {

    const data = {
      id: "9",
      company: 'ccc',
      name: "nnn",
      collection: "ccc ccc",
      description: "ddddddddddddddddddddddddddddddddddd",
      price: "1000",
      image1: "upload/1-1.webp",
      image2: "upload/1-2.webp",
      image3: "upload/1-3.webp",
      image4: "upload/1-4.webp",
      image5: "upload/1-5.webp",
    }

    this.props.addDataFromAdmin(data);
  }

  render() {
    return (
     <div>
       <h1>PageAdmin</h1>
       <button onClick={this.onSend}>ok</button>
     </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addDataFromAdmin
}, dispatch);

export default connect(null, mapDispatchToProps)(PageAdmin);