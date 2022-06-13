import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import Header from '../Header/Header'
import GalleryList from '../GalleryList/galleryList'
import GalleryItem from '../GalleryItem/galleryItem';
import './App.css';

function App() {
  let [galleryList, setGalleryList] = useState('');
  // add likeNumber, setLikeNumber

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

  const likePhoto = (id => {
    console.log('click likeBtn', id);
    axios({
      method: 'PUT',
      url: `/galler/like/${id}`
    })
      .then(res => {
          console.log('in app likeItem axios.then', res);
          getGalleryList(res);
      })
      .catch(err => {
          alert('error updating likes in app axios.put.catch')
      });
  });

    return (
      <div className="App">
        <Header/>
        {galleryList.length > 0 &&
        <GalleryList
          galleryList={galleryList}
          GalleryItem={GalleryItem}
          likePhoto={likePhoto}
        />}
      </div>
    );
}

export default App;
