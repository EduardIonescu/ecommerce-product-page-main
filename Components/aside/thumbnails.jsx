import Image from "next/image";

const thumbnailSources = [
	"/images/image-product-1-thumbnail.jpg",
	"/images/image-product-2-thumbnail.jpg",
	"/images/image-product-3-thumbnail.jpg",
	"/images/image-product-4-thumbnail.jpg",
];
export default function Thumbnails({ imageIndex, setImageIndex }) {
	return (
		<ul className="flex w-[530px] justify-between mt-9 mx-auto">
			{thumbnailSources.map((thumbnailSource, index) => (
				<li
					key={index}
					className={`border-transparent	border-2 rounded-xl overflow-hidden
										transition-all duration-300 ease-linear 
										${index + 1 == imageIndex && "border-primaryOrange"}`}
					onClick={() => {
						setImageIndex(index + 1);
					}}
				>
					{" "}
					<div className="bg-white">
						<Image
							className={`cursor-pointer 
						${index + 1 == imageIndex && "opacity-40"}
										transition-all duration-300 ease-linear hover:opacity-40`}
							src={thumbnailSource}
							width={104}
							height={110}
							alt=""
							aria-hidden="true"
						/>
					</div>
				</li>
			))}
		</ul>
	);
}
