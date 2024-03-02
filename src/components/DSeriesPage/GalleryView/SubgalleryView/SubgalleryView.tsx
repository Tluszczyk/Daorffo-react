import "./SubgalleryView.css"
import "./SubgalleryView_desktop.css"
import "./SubgalleryView_mobile.css"

interface SubgalleryViewProps {
    galleryId:      number
    subgalleryId:   number
    itemCount:      number
    onClick:        () => void
}
 
const SubgalleryView = (props: SubgalleryViewProps) => {
    var parentPath = `resources/TrailerPage/Gallery/GalleryItem-${props.galleryId}/Subgallery-${props.subgalleryId}/`
    var images = []

    for (let itemId = 0; itemId < props.itemCount; itemId++) {
        let filename = parentPath + `${itemId}.jpg`

        images.push(
            <img className="gallery-item" alt="file not found" src={filename} key={itemId} />
        )
    }

    var style = window.innerWidth < 768 ? 
        { gridRow: `${2*(props.subgalleryId + 1)} / span 1` } :
        { gridRow: `${props.subgalleryId + 1} / span 1` }

    return (
        <div className="trailer-layout-right subgallery" style={ style } onClick={props.onClick}>
            {images}
        </div>
    );
}
 
export default SubgalleryView;