import {useState} from 'react';

function galleryItem({photo, likePhoto}){
    console.log('in galleryItem');

    const [isImage, setIsImage] = useState(true);

    return (
        <>
            <div id="theGallery" onClick={() => setIsImage(!isImage)}>
                    <span key={photo.id} >
                        {isImage ? 
                        <img src={photo.photo} alt={photo.description}/>
                        :
                        <span>{photo.description}</span>}
                        <p className="numberOfLikes">Image Likes:{photo.number}</p>
                        <button className="likeBtn" onClick={() => likePhoto(photo)}>Like</button>
                    </span>
            </div>
        </>
    );
}

export default galleryItem;