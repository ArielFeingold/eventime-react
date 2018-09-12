import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../../containers/auth/Login'
import Signup from '../../containers/auth/Signup'
import Logout from '../../containers/auth/Logout'
import CreateRecipeContainer from '../../containers/recipes/CreateRecipeContainer'
import RecipesIndexContainer from '../../containers/recipes/RecipesIndexContainer'
import UpdateRecipeContainer from '../../containers/recipes/UpdateRecipeContainer'


const Main = () => (
  <main>
    <Switch>
      <Route path='/login' exact component={Login}/>
      <Route path='/signup' exact component={Signup}/>
      <Route path="/logout" exact component={Logout} />
      <Route path="/new-recipe" exact component={CreateRecipeContainer} />
      <Route path="/recipes" exact component={RecipesIndexContainer} />
      <Route path='/' exact component={Login}/>
      <Route path='/update' exact component={UpdateRecipeContainer}/>
      <Redirect to="/" />
    </Switch>
  </main>
)

export default Main
