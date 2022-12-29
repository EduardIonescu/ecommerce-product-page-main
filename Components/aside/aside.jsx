import Image from "next/image";
import Thumbnail from "./thumbnail";

const thumbnailSources = [
	"/images/image-product-1-thumbnail.jpg",
	"/images/image-product-2-thumbnail.jpg",
	"/images/image-product-3-thumbnail.jpg",
	"/images/image-product-4-thumbnail.jpg",
];

export default function Aside() {
	return (
		<aside>
			<Image
				className="rounded-2xl"
				src="/images/image-product-1.jpg"
				width={530}
				height={530}
			/>
			<ul className="flex w-[530px] justify-between mt-9">
				{thumbnailSources.map((thumbnailSource) => (
					<Thumbnail key={thumbnailSource} src={thumbnailSource} />
				))}
			</ul>
		</aside>
	);
}
