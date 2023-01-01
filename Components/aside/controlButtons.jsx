export function NextImageButton({ nextImage, isModal }) {
	let classes;
	if (isModal) {
		// Classes for modal
		classes =
			"-right-8 w-16 h-16 transition duration-300 ease-linear" +
			"hover:stroke-primaryOrange top-[298px]";
	} else {
		// Classes for mobile image carousel
		classes = `w-12 h-12 right-4 pl-1 top-[calc(50vw*4/5-24px)]`;
	}
	return <ControlImageButton direction={nextImage} classes={classes} />;
}

export function PreviousImageButton({ previousImage, isModal }) {
	let classes;
	if (isModal) {
		classes =
			"-left-8 w-16 h-16 pl-2 rotate-180 transition duration-300 ease-linear" +
			" hover:stroke-primaryOrange top-[298px]";
	} else {
		classes = `rotate-180 w-12 h-12 left-4 pl-1 top-[calc(50vw*4/5-24px)]`;
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
