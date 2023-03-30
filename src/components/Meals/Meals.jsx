import React, { useState } from "react";
import Cart from "../Cart/Cart";
import SingleMeal from "../SingleMeal/SingleMeal";

const Meals = () => {
  const [cart, setCart] = useState([]);

  const handleName = (id) => {
    const newCart = [...cart, id];
    setCart(newCart);
  };

  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState();
  const searchMeal = (e) => {
    if (e.key == "Enter") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((data) => setMeals(data.meals));
    }
  };

  return (
    <div className="text-center form">
      <h1>Welcome To MealDB Website</h1>
      <input
        className="px-5 "
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="Enter food name"
        onKeyPress={searchMeal}
      />
      <div className="row py-5">
        <div className="col-8 border border-primary">
          <div className="row">
            {meals == null ? (
              <p>Data Not Fund</p>
            ) : (
              meals.map((meal) => (
                <SingleMeal meal={meal} handleName={handleName}></SingleMeal>
              ))
            )}
          </div>
        </div>
        <div className="col-4  border border-success">
          <h1> outlet cart</h1>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Meals;
