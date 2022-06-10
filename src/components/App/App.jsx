import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../Header/Header'
import GalleryList from '../GalleryList/galleryList'
import galleryItem from '../GalleryItem/galleryItem';
import './App.css';

function App() {
  let [galleryList, setGalleryList] = useState('');
  let [photoDescription, setPhotoDescription] = useState('');
  let [photoLikes, setPhotoLikes] = useState(0);

  useEffect(() => {
    getGalleryList()
  }, []);

const getGalleryList = () => {

  axios({
      method: 'GET',
      url: '/photos'
  }).then((res)=>{
      console.log('res.data', res.data);
      setShoppingList(res.data)
  })
  .catch((error)=> {
      console.log('GET photos app side failed', error);
  });
};

    return (
      <div className="App">
        <Header/>
        <GalleryList
          galleryList={GalleryList}
          // updateItem={updateItem}
        />
      </div>
    );
}

export default App;
