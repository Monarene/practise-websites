import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <h3>Recipe</h3>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.text}>{ingredient.text}</li>
        ))}
      </ul>
      <img src={image} className={style.image} alt="" />
    </div>
  );
};

export default Recipe;
