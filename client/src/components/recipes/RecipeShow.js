import React from 'react';
import { ListGroupItem, Button } from 'mdbreact'

const RecipeShow = (props) => (
  <div>
    <h2>{props.title}</h2>
    <h5>{props.category}</h5>
    <p>{props.ingrediants}</p>
  </div>
)

export default RecipeShow;
