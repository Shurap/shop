import React, { Component } from 'react';
import styles from './PageLogin.module.css'

class PageLogin extends Component {

  state = {
    login: '',
    password: ''
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    // send login and password, if OK
    this.props.history.push('/admin');
  }

  render() {

    const { login, password } = this.state;

    const isInvalid = password === '' || login === '';

    return (
      <div>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <div className={styles.wrapperInputs}>
            <div className={styles.textWrapper}>
              To enter to adminpage enter login and password
            </div>
            <input
              className={styles.textInput}
              name="login"
              value={login}
              onChange={this.onChange}
              type="text"
              placeholder="Login"
              autoComplete="off"
            />
            <span className={styles.underEdit}></span>
            <input
              className={styles.textInput}
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
              autoComplete="off"
            />
            <span className={styles.underEdit}></span>
            <div className={styles.textWrapper}>
              Enter any login and any password, because there isn't server...
            </div>
            <button
              className={styles.button}
              disabled={isInvalid}
              type="submit"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PageLogin;