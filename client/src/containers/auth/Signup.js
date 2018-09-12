import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/actions/index';
import { Container, Row, Col, Button } from 'mdbreact';
import { Alert } from 'reactstrap';
import Spinner from '../../components/UI/Spinner'

class Signup extends Component {

      state = {
        email: '',
        password: '',
        username: ''
      }

      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      submitHandler = ( event ) => {
        event.preventDefault();
        event.target.className += ' was-validated';
        this.props.onSignup( this.state.email, this.state.password, this.state.username);
      }

    render(){

      let spinner = null;
      if ( this.props.loading ) {spinner = <Spinner />}

      let errorMessagesEmail = null;

      let usernameError =  '';
      let emailError = '';
      let passwordError = ''
      if ( this.props.errors ) {
        usernameError = this.props.errors["username"][0];
        emailError = this.props.errors["username"][0];
        passwordError = this.props.errors["username"][0]
      }

      let authRedirect = null;
      if ( this.props.isNewSignup ) {
          authRedirect = <Redirect to="/login" />
      }


      return(
        <Container className="mt-5 mx-auto">
          {authRedirect}
          <Row>
            <Col md="3"/>
            <Col md="6">
              {spinner}
              <form  className='needs-validation example z-depth-5 p-3' onSubmit={this.submitHandler} noValidate>
                <p className="h4 text-center mb-4">Sign up</p>
                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Choose Username</label>
                <input onChange={this.handleChange} type="text" name="username" value={this.state.username} className="form-control" required/>
                <div className="invalid-feedback">Username {usernameError}</div>
                <br/>
                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">Your Email</label>
                <input onChange={this.handleChange} type="email" name="email" value={this.state.email} className="form-control" required/>
                <div className="invalid-feedback">Email {emailError}</div>
                <br/>
                <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">Choose Password</label>
                <input onChange={this.handleChange} type="password" name="password" value={this.state.password}  className="form-control" pattern=".{8,}" placeholder="Eight or more characters" required/>
                <div className="invalid-feedback">Password {passwordError}</div>
                <div className="text-center mt-4">
                  <Button className="btn btn-indigo" type="submit">Register</Button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        errors: state.auth.signupError,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath,
        isNewSignup: state.auth.isNewSignup
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignup: ( email, password, username ) => dispatch( actions.signup( email, password, username) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Signup );
