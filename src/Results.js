import React from 'react';
import Recipe from './Recipe';
import { Circles } from 'svg-loaders-react';

const Results = ({ recipes, loading }) => {
  if (recipes.length === 0) {
    return <h1>No Matches Found</h1>;
  } else if (loading) {
    return (
      <div className="loader">
        <Circles stroke="green" fill="green" />
      </div>
    );
  } else {
    return (
      <>
        {recipes.map((recipe, index) => {
          return (
            <Recipe
              key={index}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              calories={recipe.recipe.calories}
              recipe={recipe.recipe}
              ingredients={recipe.recipe.ingredients}
            />
          );
        })}
      </>
    );
  }
};

export default Results;
