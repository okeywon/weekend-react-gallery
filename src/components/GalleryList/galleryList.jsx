import galleryItem from "../GalleryItem/galleryItem";

function galleryList({galleryList}){

    return (
        <>
            <div id="theGallery">
                {galleryList.map((photo) =>
                <GalleryItem
                    key={photo.id}
                    photo={photo}
                />
                )}
            </div>
        </>
    );
}

export default galleryList;