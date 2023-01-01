export function NextImageButton({ nextImage, imageHeight, isModal }) {
	let classes;
	if (isModal) {
		classes =
			"-right-8 w-16 h-16 transition duration-300 ease-linear" +
			"hover:stroke-primaryOrange top-[298px]";
	} else {
		classes = `w-12 h-12 right-4 top-[calc(100vw*4/5-24px)]`;
	}
	return <ControlImageButton direction={nextImage} classes={classes} />;
}

export function PreviousImageButton({ previousImage, imageHeight, isModal }) {
	const top = `top-[${imageHeight / 2 - 24}px]`;
	console.log("top: ", top);
	let classes;
	if (isModal) {
		classes =
			"-left-8 w-16 h-16 pl-2 rotate-180 transition duration-300 ease-linear" +
			" hover:stroke-primaryOrange top-[298px]";
	} else {
		classes = `rotate-180 w-12 h-12 left-4 ` + top;
	}
	return <ControlImageButton direction={previousImage} classes={classes} />;
}

export function ControlImageButton({ direction, classes }) {
	return (
		<button
			onClick={direction}
			className={`absolute bg-paleOrange flex items-center justify-center 
    rounded-full  stroke-veryDarkBlue 
    ${classes}`}
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
	);
}
