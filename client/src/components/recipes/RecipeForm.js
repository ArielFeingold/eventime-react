import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import { Button } from 'mdbreact'

const RecipeForm = (props) => {
  let selectError = ""
  if(props.errors){
    selectError = <p style={{color:"red", fontSize: "13px"}}>Category is required</p>
  }
  return (
    <Form className='needs-validation' onSubmit={props.onSubmit} noValidate>
      <FormGroup>
        <Input type="text" name="title" value={props.title} onChange={props.onTextChange} className="form-control" placeholder="Recipe Title" required/>

      </FormGroup>
      <FormGroup>
        <Input type="textarea" name="ingredients" value={props.ingredients}  onChange={props.onTextChange} rows="10" className="form-control" placeholder="Ingredients" required/>
        <div className="invalid-feedback">Ingredients are required</div>
      </FormGroup>
      <FormGroup>
        <select name="category" value="" onChange={props.onSelectChange} className="browser-default w-100" required>
          <div className="invalid-feedback">Title is required</div>
          <option value="" disabled>{props.category || "Choose Category"} </option>
          <option value="Appetizer">Appetizer</option>
          <option value="Soup">Soup</option>
          <option value="Meat">Meat</option>
          <option value="Fish & Seafood">Fish & Seafood</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Pasta">Pasta</option>
          <option value="Desserts">Desserts</option>
          <option value="Other" >Uncategorized</option>
        </select>
        {selectError}
        </FormGroup>
        <Button block color="primary" type="submit" value="submit">Submit Recipe</Button>
        <Button block color="danger">Cancle</Button>
      </Form>
    )
  }

export default RecipeForm;
