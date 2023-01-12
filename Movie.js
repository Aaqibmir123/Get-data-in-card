import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Form } from 'react-router-dom';
export const Movie = (props) => {
// console.log(props)
  return (
    <>
    
       {/* <div style={{background:"yellow"}}>
       <h2>{props.id}</h2>
        <h2>{props.title}</h2>
        <h2>{props.director}</h2>
       </div> */}

  <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>{props.id}</ListGroup.Item>
        <ListGroup.Item>{props.title}</ListGroup.Item>
        <ListGroup.Item>{props.director}</ListGroup.Item>
      </ListGroup>
    </Card>

   
       
    
    </>
  )
  
}
