// modules
import { useState } from "react"; 

// components

// styles
import "./ImageCarousel.scss";
import "./ImageCarousel_desktop.scss";
import "./ImageCarousel_mobile.scss";

interface ImageCarouselProps {
	imageSrcs: string[]
	rotatingInterval?: number
	rotatingSpeed?: number // percent per second
}

const ImageCarousel = (props: ImageCarouselProps) => {

	var images = props.imageSrcs.map((src, index) => <img className="image-carousel-item" key={index} src={src} alt="not found" />);
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
