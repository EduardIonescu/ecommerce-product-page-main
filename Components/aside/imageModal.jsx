import Modal from "react-modal";
import Image from "next/image";
import { useState } from "react";
import Thumbnails from "./thumbnails";

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

export default function ImageModal({
	modalIsOpen,
	closeModal,
	imageIndex,
	setImageIndex,
}) {
	function nextImage() {
		setImageIndex((i) => {
			if (i <= 3) {
				return i + 1;
			} else {
				setImageIndex(1);
			}
		});
	}
	function previousImage() {
		setImageIndex((i) => {
			if (i >= 2) {
				return i - 1;
			} else {
				setImageIndex(4);
			}
		});
	}
	return (
		<>
			<Modal
				ariaHideApp={false}
				closeTimeoutMS={500}
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
						src={`/images/image-product-${imageIndex}.jpg`}
						width={660}
						height={660}
						alt="sneakers image"
					/>
					<button
						onClick={previousImage}
						className="absolute bg-paleOrange w-16 h-16 pl-2 
          flex items-center justify-center rounded-full top-[298px] -left-8
          hover:stroke-primaryOrange stroke-veryDarkBlue rotate-180
          transition duration-300 ease-linear"
					>
						<svg width="16" height="24" alt="previous">
							<path
								d="m2 1 10 10-10 10"
								stroke=""
								strokeWidth="4"
								fill="none"
								fillRule="evenodd"
							/>
						</svg>
					</button>
					<button
						onClick={nextImage}
						className="absolute bg-paleOrange w-16 h-16 pl-2 
          flex items-center justify-center rounded-full top-[298px] -right-8
          hover:stroke-primaryOrange stroke-veryDarkBlue 
          transition duration-300 ease-linear"
					>
						<svg width="16" height="24" alt="next">
							<path
								d="m2 1 10 10-10 10"
								stroke=""
								strokeWidth="4"
								fill="none"
								fillRule="evenodd"
							/>
						</svg>
					</button>
				</div>
				<Thumbnails
					imageIndex={imageIndex}
					setImageIndex={setImageIndex}
				/>
			</Modal>
		</>
	);
}