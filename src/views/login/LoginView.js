import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../../redux/auth/authOperations";

import styles from "./LoginView.module.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}
const mapDispatchToProps = {
  onLogin: logIn,
};
export default connect(null, mapDispatchToProps)(Login);
