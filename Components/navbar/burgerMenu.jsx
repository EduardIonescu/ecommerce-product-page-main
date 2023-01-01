import { slide as Menu } from "react-burger-menu";

const styles = {
	// Couldn't find the className for menuWrap
	bmMenuWrap: {
		position: "fixed",
		left: 0,
		top: 0,
		height: "100%",
	},

	// bg doesnt get changed inside className for some reason
	bmOverlay: {
		background: "rgba(0, 0, 0, 0.75)",
	},
};
export default function BurgerMenu({ children }) {
	return (
		<Menu
			burgerButtonClassName="relative w-[18px] h-4 md:hidden mt-1"
			burgerBarClassName="h-[3px] bg-veryDarkBlue"
			crossButtonClassName="h-6 w-6 left-5 top-6"
			crossClassName="bg-darkGrayishBlue top-2"
			menuClassName="bg-white pt-24 px-6"
			overlayClassName="left-0 top-0"
			itemListClassName="list-none block"
			width={250}
			styles={styles}
		>
			{children}
		</Menu>
	);
}
