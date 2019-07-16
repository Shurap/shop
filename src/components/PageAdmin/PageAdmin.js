import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addDataFromAdmin } from '../../actions';
import { getNewId } from '../../selectors';
import styles from './PageAdmin.module.css'

class PageAdmin extends Component {

  state = {
    company: '',
    name: '',
    collection: '',
    description: '',
    price: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    image5: '',
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSend = () => {

    const data = {
      id: this.props.newId,
      company: this.state.company,
      name: this.state.name,
      collection: this.state.collection,
      description: this.state.description,
      price: this.state.price,
      image1: this.state.image1,
      image2: this.state.image1,
      image3: this.state.image1,
      image4: this.state.image1,
      image5: this.state.image1,
    }

    console.log(data)

    this.props.addDataFromAdmin(data);
  }

  render() {

    const {
      company,
      name,
      collection,
      description,
      price,
      image1
    } = this.state;

    return (
      <div>
        <div className={styles.form} onSubmit={this.onSubmit}>
          <div className={styles.wrapperInputs}>
            <input
              className={styles.textInput}
              name="company"
              value={company}
              onChange={this.onChange}
              type="text"
              placeholder="Company"
              autoComplete="off"
            />
            <span className={styles.underEdit}></span>
            <input
              className={styles.textInput}
              name="name"
              value={name}
              onChange={this.onChange}
              type="text"
              placeholder="Model's name"
              autoComplete="off"
            />
            <span className={styles.underEdit}></span>
            <input
              className={styles.textInput}
              name="collection"
              value={collection}
              onChange={this.onChange}
              type="text"
              placeholder="Collection's name"
              autoComplete="off"
            />
            <span className={styles.underEdit}></span>
            <input
              className={styles.textInput}
              name="description"
              value={description}
              onChange={this.onChange}
              type="text"
              placeholder="Description"
              autoComplete="off"
            />
            <span className={styles.underEdit}></span>
            <input
              className={styles.textInput}
              name="price"
              value={price}
              onChange={this.onChange}
              type="text"
              placeholder="Price"
              autoComplete="off"
            />
            <span className={styles.underEdit}></span>
            <input
              className={styles.textInput}
              name="image1"
              value={image1}
              onChange={this.onChange}
              type="text"
              placeholder="Image's url"
              autoComplete="off"
            />
            <span className={styles.underEdit}></span>
            <button
              className={styles.button}
              onClick={this.onSend}
            >
              add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addDataFromAdmin
}, dispatch);

const mapStateToProps = (state) => {
  return { newId: getNewId(state) }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageAdmin);