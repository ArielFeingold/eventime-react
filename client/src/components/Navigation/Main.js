import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../../containers/auth/Login'
import Signup from '../../containers/auth/Signup'
import Logout from '../../containers/auth/Logout'
import RecipeContainer from '../../containers/recipes/RecipeContainer'
import Recipes from '../../containers/recipes/RecipesContainer'


const Main = () => (
  <main>
    <Switch>
      <Route path='/login' exact component={Login}/>
      <Route path='/signup' exact component={Signup}/>
      <Route path="/logout" exact component={Logout} />
      <Route path="/new-recipe" exact component={RecipeContainer} />
      <Route path="/recipes" exact component={Recipes} />
      <Route path='/' exact component={Login}/>
      <Redirect to="/" />
    </Switch>
  </main>
)

export default Main
