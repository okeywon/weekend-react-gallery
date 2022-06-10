function galleryList({galleryList}){

    return (
        <>
            <div id="theGallery">
                {galleryList.map((galleryList) =>
                    <span key={galleryList.id}>
                        <p
                            galleryList={galleryList.description}
                        />
                    </span>
                )}
            </div>
        </>
    );
}

export default galleryList;