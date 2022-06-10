import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import Header from '../Header/Header'
import GalleryList from '../GalleryList/galleryList'
import GalleryItem from '../GalleryItem/galleryItem';
import './App.css';

function App() {
  let [galleryList, setGalleryList] = useState('');

  useEffect(() => {
    getGalleryList()
  }, []);

  const getGalleryList = () => {

    axios({
        method: 'GET',
        url: '/photos'
    }).then((res)=>{
        console.log('res.data', res.data);
        setGalleryList(res.data)
    })
    .catch((error)=> {
        console.log('GET photos app side failed', error);
    });
  };

    return (
      <div className="App">
        <Header/>
        {galleryList.length > 0 &&
        <GalleryList
          galleryList={galleryList}
          // updateItem={updateItem}
        />}
      </div>
    );
}

export default App;
