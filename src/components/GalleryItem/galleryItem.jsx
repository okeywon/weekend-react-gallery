import {useState} from 'react';

function galleryItem({photo, likePhoto}){
    console.log('in galleryItem');

    const [isImage, setIsImage] = useState(true);

    return (
        <>
            <span>
                <div id="theGallery" onClick={() => setIsImage(!isImage)}>
                        <span key={photo.id} >
                            {isImage ? 
                            <img src={photo.photo} alt={photo.description}/>
                            :
                            <span>{photo.description}</span>}
                        </span>
                </div>
                <div>
                    <p className="numberOfLikes">Image Likes:{photo.number}</p>
                    <button className="likeBtn" onClick={() => likePhoto(photo.id)}>Like</button>
                </div>
            </span>
        </>
    );
}

export default galleryItem;