import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { } from 'mdbreact';


class RecipesContainer extends Component {
  state = {

  };

  render() {
    return( "Recipes")
  }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
      onAdd: (title, description, category) => dispatch( actions.addRecipe( title, description, category))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(RecipesContainer)
