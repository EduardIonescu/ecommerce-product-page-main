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
					className="md:w-7 md:height-7"
					src="/images/icon-cart.svg"
					alt="shopping cart"
					width={24}
					height={24}
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
					className="absolute max-md:z-10 max-md:left-[calc((100vw-360px)/2)]
					max-md:top-20 max-md:w-[360px] max-md:h-64
					md:top-16 md:inset-x-[-14rem] md:h-[20rem] md:w-[27rem]
          bg-white rounded-xl shadow-cart"
				>
					<h3
						className="font-bold max-md:text-[16px] md:text-[18px] 
						text-veryDarkBlue max-md:h-16 md:h-20 max-md:pl-6
                flex items-center md:pl-7 border-b-2 border-lightGrayishBlue"
					>
						Cart
					</h3>
					<div
						className="w-[100%] max-md:h-48 md:h-60 flex items-center 
						justify-center flex-col max-md:p-6 md:p-8 max-md:gap-6 md:gap-9"
					>
						{orders > 0 ? (
							<>
								<div
									className="max-md:text-[16px] md:text-[19px] text-darkGrayishBlue 
								flex justify-between w-[100%]"
								>
									<Image
										className="rounded-md md:w-[60px] md:h-[60px]"
										src={sneakerInfo.thumbnailURL}
										alt=""
										aria-hidden="true"
										width={50}
										height={50}
									/>
									<div>
										<p className="max-md:pb-[1px]">
											{sneakerInfo.title}
										</p>
										<p className="max-md:pt-[1px]">
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
											className="md:w-5 md:h-6"
											height={20}
											width={16}
											alt="delete"
											src="/images/icon-delete.svg"
										/>
									</button>
								</div>
								<button
									className="w-[100%] max-md:h-14 md:h-[4.25rem] bg-primaryOrange
								rounded-xl vmax-md:text-[16px] md:text-[19px] text-paleOrange
								font-bold hover:opacity-75 transiton-all duration-300
								ease-linear mb-auto"
								>
									Checkout
								</button>
							</>
						) : (
							<p
								className="font-bold text-darkGrayishBlue max-md:text-[16px]
							 md:text-[18px]"
							>
								Your cart is empty.
							</p>
						)}
					</div>
				</article>
			)}
		</>
	);
}
