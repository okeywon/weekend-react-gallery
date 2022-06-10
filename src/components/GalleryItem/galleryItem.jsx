function galleryItem(photo){


    return (
        <>
            <div id="theGallery">
                    <span key={photo.id}>
                        <img src="images/goat_small.jpg"/>
                        <p>Description: {photo.description}</p>
                        <p id="numberOfLikes">Image Likes:{photo.number}</p>
                        <button id="likeBtn">Like</button>
                    </span>
            </div>
        </>
    );
}

export default galleryItem;