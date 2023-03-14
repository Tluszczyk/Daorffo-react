import "./GalleryView.css"
import "./GalleryView_desktop.css"
import "./GalleryView_mobile.css"

import SubgalleryView from "./SubgalleryView/SubgalleryView"

interface GalleryViewProps {
    galleryId:              number
    subgalleriesItemCount:  number[]
}
 
const GalleryView = (props: GalleryViewProps) => {
    var subgalleries = []

    for (const [subgalleryId, itemCount] of props.subgalleriesItemCount.entries()) {
        subgalleries.push(
            <SubgalleryView 
                galleryId={props.galleryId}
                subgalleryId={subgalleryId}
                itemCount={itemCount}
            />
        )
    }
    
    return <div className={`gallery-${props.galleryId}`}>
        {subgalleries}
    </div>
}
 
export default GalleryView;