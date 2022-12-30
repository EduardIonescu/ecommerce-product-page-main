import Image from "next/image";
export default function Thumbnail({ src }) {
	return (
		<li>
			<Image
				className="rounded-xl cursor-pointer border-2 border-transparent
                transition-all duration-300 ease-linear hover:opacity-25              "
				src={src}
				width={104}
				height={110}
				alt=""
				aria-hidden="true"
			/>
		</li>
	);
}
