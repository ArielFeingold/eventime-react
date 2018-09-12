import React from 'react';
import { Container, Button, ModalBody, ModalHeader, ModalFooter } from 'mdbreact'

const RecipeShow = (props) => (
  <React.Fragment>
    <ModalHeader >
      {props.title}
      <p className="font-italic h6">{props.category}</p>
      <br></br>
      <p className="h5">{props.ingrediants}</p>
    </ModalHeader>
      <ModalBody>
        {props.ingrediants}
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={props.toggle}>Close</Button>{' '}
        <Button color="info" onClick={props.onUpdateClick}>UPDATE</Button>
    </ModalFooter>
  </React.Fragment>
)

export default RecipeShow;
