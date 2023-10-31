import "./SubgalleryView.css"
import "./SubgalleryView_desktop.css"
import "./SubgalleryView_mobile.css"

interface SubgalleryViewProps {
    galleryId:      number
    subgalleryId:   number
    itemCount:      number
}
 
const SubgalleryView = (props: SubgalleryViewProps) => {
    var parentPath = `resources/TrailerPage/Gallery/GalleryItem-${props.galleryId}/Subgallery-${props.subgalleryId}/`
    var images = []

    for (let itemId = 0; itemId < props.itemCount; itemId++) {
        let filename = parentPath + `${itemId}.jpg`

        images.push(
            <img className="gallery-item" alt="file not found" src={filename} />
        )
    }

    return <div className="subgallery">
        {images}
    </div>
}
 
export default SubgalleryView;