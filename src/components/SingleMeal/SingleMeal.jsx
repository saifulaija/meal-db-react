import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleMeal = ({ meal, handleName}) => {
  console.log(meal,handleName);

  return (
    <div className="col-6 my-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={meal.strMealThumb} />
        <Card.Body>
          <Card.Title>{meal.strMeal}</Card.Title>
          <Card.Text>
            <p>{meal.strInstructions.slice(0,80)}.......</p>
          </Card.Text>
          <Button onClick={()=>handleName(meal)} variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleMeal;
