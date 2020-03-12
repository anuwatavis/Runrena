import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
class SignUp extends Component {
  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="signin-page">
        <Form className="form-signin">
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="Password" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Username</Label>
            <Input type="password" name="password" id="password" placeholder="Password" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Height</Label>
            <Input type="password" name="password" id="password" placeholder="Password" />
          </FormGroup>
          <Button className="btn-block">Submit</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(SignUp);
