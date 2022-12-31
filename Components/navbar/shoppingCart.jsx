import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function ShoppingCart({ orders, deleteOrders }) {
	const [cartIsActive, setCartIsActive] = useState(false);

	const cartRef = useRef(null);
	const cartIconRef = useRef(null);

	function toggleCart() {
		setCartIsActive(!cartIsActive);
	}

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				cartRef.current &&
				!cartRef.current.contains(event.target) && //Outside of cart container
				!cartIconRef.current.contains(event.target) //Outside of cartIcon
			) {
				setCartIsActive(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [cartRef]);

	const sneakerInfo = {
		thumbnailURL: "/images/image-product-1-thumbnail.jpg",
		title: "Fall Limited Edition Sneakers",
		price: 125.0,
	};

	function calculateTotal(amount) {
		return (sneakerInfo.price * parseInt(amount)).toFixed(2);
	}

	return (
		<>
			{/* Shopping cart icon on Navbar */}
			<button onClick={toggleCart} className="relative" ref={cartIconRef}>
				<Image
					src="/images/icon-cart.svg"
					alt="shopping cart"
					width={28}
					height={28}
				/>
				{orders > 0 && (
					<p
						className="absolute -top-1.5 -right-2 w-6 py-[1px] bg-primaryOrange
					text-[12px] leading-none text-paleOrange font-bold p-0 rounded-full"
					>
						<span>{orders}</span>
					</p>
				)}
			</button>
			{/* Shopping cart displayed when active */}
			{cartIsActive && (
				<article
					ref={cartRef}
					className="absolute top-16 inset-x-[-14rem] h-[20rem] w-[27rem]
             bg-white rounded-xl shadow-cart"
				>
					<h3
						className="font-bold text-[18px] text-veryDarkBlue h-20
                flex items-center pl-7 border-b-2 border-lightGrayishBlue"
					>
						Cart
					</h3>
					<div
						className="w-[100%] h-60 flex items-center justify-center flex-col
                    p-8 gap-9"
					>
						{orders > 0 ? (
							<>
								<div
									className="text-[19px] text-darkGrayishBlue 
								flex justify-between w-[100%]"
								>
									<Image
										className="rounded-md"
										src={sneakerInfo.thumbnailURL}
										alt=""
										aria-hidden="true"
										width={60}
										height={60}
									/>
									<div>
										<p>{sneakerInfo.title}</p>
										<p>
											${sneakerInfo.price.toFixed(2)} x{" "}
											{orders}{" "}
											<span className="font-bold text-veryDarkBlue">
												${calculateTotal(orders)}
											</span>
										</p>
									</div>
									<button onClick={deleteOrders}>
										<span className="sr-only">
											delete button
										</span>
										<Image
											height={24}
											width={20}
											alt="delete"
											src="/images/icon-delete.svg"
										/>
									</button>
								</div>
								<button
									className="w-[100%] h-[4.25rem] bg-primaryOrange rounded-xl
								text-[19px] text-paleOrange font-bold hover:opacity-75
								transiton-all duration-300 ease-linear mb-auto"
								>
									Checkout
								</button>
							</>
						) : (
							<p className="font-bold text-darkGrayishBlue text-[18px]">
								Your cart is empty.
							</p>
						)}
					</div>
				</article>
			)}
		</>
	);
}
