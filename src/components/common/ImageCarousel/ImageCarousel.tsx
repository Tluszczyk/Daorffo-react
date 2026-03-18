// modules

// components

// styles
import "./ImageCarousel.scss";
import "./ImageCarousel_desktop.scss";
import "./ImageCarousel_mobile.scss";

interface ImageCarouselProps {
	imageSrcs: string[]
	rotatingInterval?: number
	rotatingSpeed?: number // percent per second
	width: number
	height: number
}

const ImageCarousel = (props: ImageCarouselProps) => {

	var images = props.imageSrcs.map((src, index) => <img className="image-carousel-item" key={index} src={src} alt="Daorffo Off-Road Trailer" width={props.width} height={props.height} loading="lazy" />);
	images = images.concat(images);

	return (
		<div className="imagecarousel-wrapper">
			<div className="image-carousel">
				{ images }
			</div>
		</div>
	);
};


export default ImageCarousel;
