import React from 'react';
import './App.css';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Which photos in the gallery are your favorite? Hit the 'like' button to vote!</p>
        <div>
          <img src="images/goat_small.jpg"/>
          <img src="images/African-Sunset.webp"/>
          <img src="images/Butterfly.webp"/>
          <img src="images/Circle-river.jpeg"/>
          <img src="images/Colorful-Mountain.webp"/>
          <img src="images/Mountain-in-red.jpeg"/>
          <img src="images/Ocean-rock.jpeg"/>
          <img src="images/Raindrop.webp"/>
          <img src="images/Tree-by-water.jpeg"/>
          <img src="images/Winter-trees.jpeg"/>
        </div>
      </div>
    );
}

export default App;
