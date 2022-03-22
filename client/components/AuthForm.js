import React from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.authorize(
      this.state.email,
      this.state.password,
      this.props.formName
    );
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <InputGroup className="mb-3">
          <FormControl
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
            aria-label="User email"
          />
          <Button type="submit" variant="outline-secondary" id="button-addon2">
            Submit
          </Button>
        </InputGroup>
      </Form>
    );
  }
}
const mapLogin = (state) => {
  return {
    formName: "login",
    displayName: "Login",
    error: state.user.error,
  };
};

const mapSignup = (state) => {
  return {
    formName: "signup",
    displayName: "Sign Up",
    error: state.user.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    authorize: (email, password, formName) =>
      dispatch(authorize(email, password, formName)),
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
