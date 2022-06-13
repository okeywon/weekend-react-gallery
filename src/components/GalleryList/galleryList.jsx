function galleryList({galleryList, GalleryItem, likePhoto}){
    console.log('in galleryList', galleryList);
    return (
        <>
            <div id="theGallery">
                {galleryList.map((photo) =>
                <GalleryItem
                    key={photo.id}
                    photo={photo}
                    likePhoto={likePhoto}
                />
                )}
            </div>
        </>
    );
}

export default galleryList;