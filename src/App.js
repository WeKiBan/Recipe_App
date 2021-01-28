import './App.css';
import React, { useState } from 'react';
import SearchForm from './SearchForm';
import Results from './Results';

const App = () => {
  const [query, setQuery] = useState('');
  const APP_ID = '699b98f8';
  const APP_KEY = 'fb5060ecc988c3db7cf4a91a4df9120d';
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchRecipes = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await res.json();
      setRecipes(data.hits);
    } catch (err) {
      console.log(err);
    }
    setQuery('');
    setLoading(false);
  };

  return (
    <div className="App">
      <h1 className="header">Recipe Search</h1>
      <SearchForm
        query={query}
        searchRecipes={searchRecipes}
        setQuery={setQuery}
      />
      <div className="results">
        <Results loading={loading} recipes={recipes} />
      </div>
    </div>
  );
};

export default App;
