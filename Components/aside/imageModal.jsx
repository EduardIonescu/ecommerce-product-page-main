import Modal from "react-modal";
import Image from "next/image";
import { useState, useEffect } from "react";
import Thumbnails from "./thumbnails";
import { NextImageButton, PreviousImageButton } from "./controlButtons";

const customStyles = {
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0.75)",
	},
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		width: "660px",
		padding: 0,
		margin: 0,
		backgroundColor: "transparent",
		border: "none",
		overflow: "visible",
	},
};

export default function ImageModal({ modalIsOpen, closeModal, imageIndex }) {
	const [modalImageIndex, setModalImageIndex] = useState(1);

	function nextImage() {
		setModalImageIndex((i) => {
			if (i <= 3) {
				return i + 1;
			} else {
				return 1;
			}
		});
	}
	function previousImage() {
		setModalImageIndex((i) => {
			if (i >= 2) {
				return i - 1;
			} else {
				return 4;
			}
		});
	}

	useEffect(() => {
		function nextHandler({ key }) {
			{
				if (key == "d" || key == "ArrowRight") {
					nextImage();
				} else if (key == "a" || key == "ArrowLeft") {
					previousImage();
				}
			}
		}

		if (modalIsOpen) {
			window.addEventListener("keydown", nextHandler);
		}

		return () => {
			window.removeEventListener("keydown", nextHandler);
		};
	}, [modalIsOpen]);

	return (
		<>
			<Modal
				ariaHideApp={false}
				closeTimeoutMS={500}
				onAfterOpen={() => setModalImageIndex(imageIndex)} // Open on same index that was selected
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Image Modal"
			>
				<button
					onClick={closeModal}
					className="w-full flex justify-end mb-6"
				>
					<span className="sr-only">Close Modal</span>
					<Image
						src="/images/icon-close.svg"
						width={32}
						height={32}
						alt="close modal"
					/>
				</button>
				<div className="relative">
					<Image
						className="rounded-2xl"
						src={`/images/image-product-${modalImageIndex}.jpg`}
						width={660}
						height={660}
						alt="sneakers image"
					/>

					<PreviousImageButton
						previousImage={previousImage}
						isModal={true}
					/>
					<NextImageButton nextImage={nextImage} isModal={true} />
				</div>
				<Thumbnails
					imageIndex={modalImageIndex}
					setImageIndex={setModalImageIndex}
				/>
			</Modal>
		</>
	);
}
