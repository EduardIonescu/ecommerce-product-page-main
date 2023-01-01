import Image from "next/image";
import Thumbnails from "./thumbnails";
import { useState } from "react";
import ImageModal from "./imageModal";
import { PreviousImageButton, NextImageButton } from "./controlButtons";

export default function Aside({ windowWidth }) {
	const [imageIndex, setImageIndex] = useState(1);
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}
	if (windowWidth >= 768) {
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
				<Thumbnails
					imageIndex={imageIndex}
					setImageIndex={setImageIndex}
				/>
			</aside>
		);
	} else {
		function nextImage() {
			setImageIndex((i) => {
				if (i == 4) {
					return 1;
				} else {
					return i + 1;
				}
			});
		}
		function previousImage() {
			setImageIndex((i) => {
				if (i == 1) {
					return 4;
				} else {
					return i - 1;
				}
			});
		}
		return (
			<aside className="w-full relative">
				<Image
					className={`w-full aspect-[5/4] object-cover`}
					src={`/images/image-product-${imageIndex}.jpg`}
					width={375}
					height={375}
					alt="sneakers image"
				/>

				<NextImageButton nextImage={nextImage} />
				<PreviousImageButton previousImage={previousImage} />
			</aside>
		);
	}
}
