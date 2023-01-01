import Image from "next/image";
import NavLink from "./navLink";
import ShoppingCart from "./shoppingCart";
import BurgerMenu from "./burgerMenu";

const navLinks = ["Collections", "Men", "Women", "About", "Contact"];
export default function Navbar({ orders, deleteOrders }) {
	return (
		<nav
			className="flex items-center max-md:px-6 max-md:pt-5 max-md:pb-6
			 md:pt-9 md:pb-10 md:border-b-[1px] md:border-grayishBlue relative"
		>
			<BurgerMenu>
				{navLinks.map((navLink) => {
					return <NavLink key={navLink} title={navLink} />;
				})}
			</BurgerMenu>

			<Image
				className="block max-md:ml-4 md:mr-[4.25rem] md:w-[168px] md:h-auto"
				src="/images/logo.svg"
				alt="sneakers logo"
				width={140}
				height={25}
			/>
			<ul className="flex gap-10 max-md:hidden">
				{navLinks.map((navLink) => {
					return <NavLink key={navLink} title={navLink} />;
				})}
			</ul>
			<div className="flex ml-auto items-center max-md:gap-6 md:gap-12 relative">
				<ShoppingCart orders={orders} deleteOrders={deleteOrders} />
				<Image
					className="rounded-full md:border-2 md:border-transparent 
									md:transition-all md:ease-linear md:duration-300
                     md:hover:border-primaryOrange cursor-pointer md:w-14 md:h-14"
					src="/images/image-avatar.png"
					alt="avatar image"
					width={25}
					height={25}
				/>
			</div>
		</nav>
	);
}
