import { Component } from "react";
import axios from "axios";

import AdminLTE, {
  Sidebar,
  Content,
  Row,
  Col,
  Box,
  Button,
} from "adminlte-2-react";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : ''
        };
    this.handleInputChange = this.handleInputChange.bind(this);

    }

    componentDidMount() {
        const isSignedIn = document.cookie
        .split('; ')
        .find(row => row.startsWith('userLoggedIn='))
        .split('=')[1] === 'true' ? true : false
        if (isSignedIn) {
            window.location.href = '/';
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
        [name]: event.target.value,
        });
      }

  render() {
    return (
      <>
        <div class="login-box">
          <div class="login-logo"></div>
          <div class="card">
            <div class="card-body login-card-body">
              <p class="login-box-msg">Sign in</p>
              <form>
              <div class="col col-md-6">
                      <span>Email</span>
                      <input
                        name="email"
                        type="text"
                        className="form-control"
                        placeholder="Enter Email"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Password</span>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        onChange={this.handleInputChange}
                      />
                    </div>
                  <div class="col col-md-6">
                  <input
                        type="submit"
                        onClick={(e) => {
                          this.login(e)
                        }}
                        value="Sign In"
                      />
                  </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }

  login(e) {
      e.preventDefault();
      if (this.state.email === 'admin' && this.state.password === 'admin') {
          document.cookie = "userLoggedIn=true;";
          window.location.href = '/';
      }
  }
}

export default Login;
