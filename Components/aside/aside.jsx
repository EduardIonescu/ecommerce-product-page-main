import Image from "next/image";
import Thumbnails from "./thumbnails";
import { useState } from "react";
import ImageModal from "./imageModal";

export default function Aside() {
	const [imageIndex, setImageIndex] = useState(1);
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}

	return (
		<aside>
			<Image
				onClick={openModal}
				className="rounded-2xl cursor-pointer"
				src={`/images/image-product-${imageIndex}.jpg`}
				width={530}
				height={530}
				alt="sneakers image"
			/>
			<ImageModal
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
				imageIndex={imageIndex}
			/>
			<Thumbnails imageIndex={imageIndex} setImageIndex={setImageIndex} />
		</aside>
	);
}
