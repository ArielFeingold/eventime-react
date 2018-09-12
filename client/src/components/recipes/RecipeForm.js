import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import { Button } from 'mdbreact'

const RecipeForm = (props) => {

  return (
    <Form className='needs-validation' onSubmit={props.onSubmit} noValidate>
      <FormGroup>
        <Input type="text" name="title" value={props.title} onChange={props.onTextChange} className="form-control" placeholder="Recipe Title" required/>
        <div className="invalid-feedback">Title is required</div>
      </FormGroup>
      <FormGroup>
        <Input type="textarea" name="ingredients" value={props.ingredients}  onChange={props.onTextChange} rows="10" className="form-control" placeholder="Ingredients" required/>
        <div className="invalid-feedback">Ingredients are required</div>
      </FormGroup>
      <FormGroup>
        <select name="category" value="" onChange={props.onSelectChange} className="custom-select browser-default w-100" required>
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
        <div className="invalid-feedback">Please select a catagory</div>
        </FormGroup>
        <Button block color="primary" type="submit" value="submit">Submit Recipe</Button>

      </Form>
    )
  }

export default RecipeForm;
