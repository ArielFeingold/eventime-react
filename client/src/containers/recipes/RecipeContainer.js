import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import { Form, Container, Row, Col} from 'mdbreact';
import RecipeForm from '../../components/recipes/RecipeForm'
import history from '../../history';
import Spinner from '../../components/UI/Spinner'


class RecipeContainer extends Component {
  state = {
    title: "",
    ingredients: "",
    category: ""
  };

handleTextChange = (event) => {
this.setState({
  [event.target.name]: event.target.value
})
console.log(this.state)
}

handleSelectChange = (event) => {
this.setState({
  category: event.target.value
})
console.log(this.state)
}

handleSubmit = ( event ) => {
  event.preventDefault();
  event.target.className += ' was-validated';
  this.props.onAdd(this.state.title, this.state.ingredients, this.state.category)
  this.setState({
    title: "",
    ingredients: "",
    category: ""
  })
}
  render() {

    let spinner = null;
      if ( this.props.loading ) {spinner = <Spinner />}

    let authRedirect = null;
      if ( !this.props.isAuthenticated ) { authRedirect = <Redirect to="/Login" /> }

  return(
        <Container className="mt-3 mx-auto">
          {authRedirect}
          {spinner}
          <Row className="row justify-content-center">
            <Col md="10">
              <h3>Create New Recipe</h3>
              <RecipeForm
                title={this.state.title}
                description={this.state.description}
                category={this.state.category}
                onTextChange={(event) => this.handleTextChange(event)}
                onSelectChange={(event) => this.handleSelectChange(event)}
                onSubmit={(event) => this.handleSubmit(event)}
                errors={this.props.errors}
                />
            </Col>
          </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => {
    return {
      errors: state.recipe.errors,
      loading: state.recipe.loading,
      isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
      onAdd: (title, ingredients, category) => dispatch( actions.addRecipe( title, ingredients, category))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(RecipeContainer)
