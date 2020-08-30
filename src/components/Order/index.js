import React from "react";
import classes from "./styles.css";

const order = (props) => {
  const ingredients = [];

  for (let name in props.ingredients) {
    ingredients.push({
      name: name,
      amount: props.ingredients[name],
    });
  }

  const ingredientOutput = ingredients.map((ingredient) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid gray",
          padding: "5px",
        }}
        key={ingredient.name}
      >
        {ingredient.name} ({ingredient.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>USD {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
