import React from 'react';

const Recipe = ({ recipe, title, image, calories, ingredients }) => {
  const styles = {
    background: `url(${image}) no-repeat center`,
    backgroundSize: 'cover',
  };

  return (
    <div className="recipe">
      <h1 className="title">{title}</h1>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
      <p>{Math.round(calories)} Calories</p>
      <div style={styles} className="image-container"></div>
    </div>
  );
};

export default Recipe;
