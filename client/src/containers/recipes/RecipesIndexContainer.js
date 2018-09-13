import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Redirect } from 'react-router-dom';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  ListGroup,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem ,
  Row
  } from 'reactstrap';
import { Modal } from 'mdbreact';
import RecipeListItem from '../../components/recipes/RecipeListItem';
import RecipeShow from '../../components/recipes/RecipeShow';
import Spinner from '../../components/UI/Spinner'
import history from '../../history';


class RecipesIndexContainer extends Component {

  state = {
    modal: false,
    id: null,
    title: "",
    ingredients: "",
    category: "",
    filter: "All",
    isOpen: false
  };

componentDidMount = () => {
  this.props.getRecipes();
};

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

navToggle = () => {
  this.setState({
    isOpen: !this.state.isOpen
  });
}

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

setFilter = (category) => {
    this.setState({
      filter: category
    });
  }

handleShowRecipe = (recipeId) => {
  this.props.getRecipe(recipeId)
  this.toggle()
}

handleUpdateRecipe = (recipeId) => {
  this.props.getRecipe(recipeId)
  history.push('./update')

}

  render() {

    let userRecipes = [];
    if(this.props.userRecipes) {
      userRecipes =
       this.props.userRecipes.map((recipe) =>
          <RecipeListItem
            style={{cursor: 'pointer'}}
            onDeleteClick={() => this.props.handleDeleteRecipe(recipe.id)}
            handleShowRecipe={() => this.handleShowRecipe(recipe.id)}
            key={recipe.id}
            title={recipe.title}/>
        )
    }
    if(this.state.filter !== "All" && userRecipes.length > 0){
      const filteredRecipes = this.props.userRecipes.filter(recipe => recipe.category === this.state.filter)
    if(filteredRecipes){
     userRecipes = filteredRecipes.map( recipe => (
       <RecipeListItem
         style={{cursor: 'pointer'}}
         handleShowRecipe={() => this.handleShowRecipe(recipe.id)}
         key={recipe.id}
         title={recipe.title}/>
     ));
    }
   }

    let spinner = null;
      if ( this.props.loading ) {spinner = <Spinner />}

    let authRedirect = null;
      if ( !this.props.isAuthenticated ) { authRedirect = <Redirect to="/Login" /> }
    return(
      <React.Fragment>
        <Container>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <RecipeShow
              toggle={() => this.toggle()}
              key={this.props.recipeId}
              title={this.props.recipeTitle}
              ingrediants={this.props.recipeIngredients}
              category={this.props.recipeCategory}
              onUpdateClick={() => this.handleUpdateRecipe(this.props.recipeId)}
              onDeleteClick={() => this.props.handleDeleteRecipe(this.props.recipeId)}
            />
          </Modal>
        </Container>
        <Container className="mt-3 mx-auto">
          {authRedirect}
          {spinner}
          <h2>Recipes</h2>
        <Navbar color="light" light expand="md">
          <NavbarBrand style={{cursor: "default"}}>Filter By Category</NavbarBrand>
          <NavbarToggler onClick={this.navToggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {this.state.filter}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={() => this.setFilter("All")}>
                    All Recipes
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => this.setFilter("Appetizer")}>
                    Appetizer
                  </DropdownItem>
                  <DropdownItem onClick={() => this.setFilter("Soup")}>
                    Soup
                  </DropdownItem>
                  <DropdownItem onClick={() => this.setFilter("Meat")}>
                    Meat
                  </DropdownItem>
                  <DropdownItem onClick={() => this.setFilter("Fish & Seafood")}>
                    Fish & Seafood
                  </DropdownItem>
                  <DropdownItem onClick={() => this.setFilter("Vegetables")}>
                    Vegetables
                  </DropdownItem>
                  <DropdownItem onClick={() => this.setFilter("Pasta")}>
                    Pasta
                  </DropdownItem>
                  <DropdownItem onClick={() => this.setFilter("Desserts")}>
                    Desserts
                  </DropdownItem>
                  <DropdownItem onClick={() => this.setFilter("Uncategorized")}>
                    Uncategorized
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <ListGroup>
          {userRecipes}
        </ListGroup>
      </Container>
    </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
    return {
      userRecipes: state.recipe.userRecipes,
      isAuthenticated: state.auth.token !== null,
      loading: state.recipe.loading,
      recipeId: state.recipe.recipeId,
      recipeTitle: state.recipe.recipeTitle,
      recipeIngredients: state.recipe.recipeIngredients,
      recipeCategory: state.recipe.recipeCategory,

    };
};

const mapDispatchToProps = dispatch => {
    return {
      getRecipes: () => dispatch(actions.getRecipes()),
      handleDeleteRecipe: (id) => dispatch(actions.deleteRecipe(id)),
      getRecipe: (id) => dispatch(actions.getRecipe(id)),
      clearRecipe: () => dispatch(actions.clearRecipe())
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(RecipesIndexContainer)
