import React from 'react';
import './App.css';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Photos of the Year Gallery</h1>
        </header>
        <p>Which photos in the gallery are your favorite? Press the 'like' button to vote!</p>
        <div id="theGallery">
          <span>
            <img src="images/goat_small.jpg"/>
            <p>Description: Goat on a mountainside.</p>
            <p id="numberOfLikes">Image Likes:</p>
            <button id="likeBtn">Like</button>
          </span>
          <span>
            <img src="images/African-Sunset.webp"/>
            <p>Description: African sunset.</p>
            <p id="numberOfLikes">Image Likes:</p>
            <button id="likeBtn">Like</button>
          </span>
          <span>
            <img src="images/Butterfly.webp"/>
            <p>Description: Butterfly on a flower.</p>
            <p id="numberOfLikes">Image Likes:</p>
            <button id="likeBtn">Like</button>
          </span>
          <span>
            <img src="images/Circle-river.jpeg"/>
            <p>Description: Bridge on a river.</p>
            <p id="numberOfLikes">Image Likes:</p>
            <button id="likeBtn">Like</button>
          </span>
          <span>
            <img src="images/Colorful-Mountain.webp"/>
            <p>Description: Colorful mountain by a lake.</p>
            <p id="numberOfLikes">Image Likes:</p>
            <button id="likeBtn">Like</button>
          </span>
          <span>
            <img src="images/Mountain-in-red.jpeg"/>
            <p>Description: Mountain in a red forest.</p>
            <p id="numberOfLikes">Image Likes:</p>
            <button id="likeBtn">Like</button>
          </span>
          <span>
            <img src="images/Ocean-rock.jpeg"/>
            <p>Description: Giant rock on the ocean.</p>
            <p id="numberOfLikes">Image Likes:</p>
            <button id="likeBtn">Like</button>
          </span>
          <span>
            <img src="images/Raindrop.webp"/>
            <p>Description: Raindrop.</p>
            <p id="numberOfLikes">Image Likes:</p>
            <button id="likeBtn">Like</button>
          </span>
          <span>
            <img src="images/Tree-by-water.jpeg"/>
            <p>Description: Tree by the water.</p>
            <p id="numberOfLikes">Image Likes:</p>
            <button id="likeBtn">Like</button>
          </span>
          <span>
            <img src="images/Winter-trees.jpeg"/>
            <p>Description: Winter trees frozen in time.</p>
            <p id="numberOfLikes">Image Likes:</p>
            <button id="likeBtn">Like</button>
          </span>
        </div>
      </div>
    );
}

export default App;
