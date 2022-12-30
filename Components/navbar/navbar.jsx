import Image from "next/image";
import NavLink from "./navLink";
import ShoppingCart from "./shoppingCart";

const navLinks = ["Collections", "Men", "Women", "About", "Contact"];
export default function Navbar({ orders, deleteOrders }) {
	return (
		<nav className="flex items-center">
			<Image
				className="block mr-[4.25rem]"
				src="/images/logo.svg"
				alt="sneakers logo"
				width={168}
				height={30}
			/>
			<ul className="flex gap-10">
				{navLinks.map((navLink) => {
					return <NavLink key={navLink} title={navLink} />;
				})}
			</ul>
			<div className="flex ml-auto items-center gap-12 relative">
				<ShoppingCart orders={orders} deleteOrders={deleteOrders} />
				<Image
					className="rounded-full border-2 border-transparent transition-all ease-linear duration-300
                     hover:border-primaryOrange"
					src="/images/image-avatar.png"
					alt="avatar image"
					width={56}
					height={56}
				/>
			</div>
		</nav>
	);
}
