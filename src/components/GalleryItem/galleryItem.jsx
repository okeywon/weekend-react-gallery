function galleryItem(photo, likePhoto){
    console.log('in galleryItem', photo.photo.description);

    return (
        <>
            <div id="theGallery">
                    <span key={photo.photo.id}>
                        <img src={photo.photo.photo} alt={photo.photo.description}/>
                        <p>Description: {photo.photo.description}</p>
                        <p className="numberOfLikes">Image Likes:{photo.photo.number}</p>
                        <button className="likeBtn" onClick={() => likePhoto(likePhoto.id)}>Like</button>
                    </span>
            </div>
        </>
    );
}

export default galleryItem;