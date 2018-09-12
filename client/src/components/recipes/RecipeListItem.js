import React from 'react';
import { ListGroupItem, Button } from 'mdbreact'

const RecipeListItem = (props) => (
<ListGroupItem>
  <div className="row pl-3 pt-2">
     <div onClick={props.handleShowRecipe} style={{cursor: "pointer"}} className="col-8-auto mr-auto">
       <h5 className="font-weight-bold">{props.title}</h5>
     </div>
     <div className="col-auto">
      <Button color="danger" onClick={props.onDeleteClick}>DELETE</Button>
     </div>
 </div>
</ListGroupItem>
)

export default RecipeListItem;
