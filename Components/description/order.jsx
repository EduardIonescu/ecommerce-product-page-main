import Image from "next/image";
import { useState } from "react";

export default function Order({ changeOrders }) {
	const [numberOfOrders, setNumberOfOrders] = useState(0);

	function handleIncrement() {
		setNumberOfOrders((n) => n + 1);
	}
	function handleDecrement() {
		if (numberOfOrders >= 1) {
			setNumberOfOrders((n) => n - 1);
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		changeOrders(numberOfOrders);
		setNumberOfOrders(0);
	}
	return (
		<form onSubmit={handleSubmit} className="flex gap-5 max-md:flex-col">
			<fieldset
				className="flex items-center max-md:justify-between md:gap-14 
				bg-lightGrayishBlue max-md:w-full md:w-[12rem]  md:h-16 
				 md:justify-center rounded-xl max-md:px-6 max-md:py-4"
			>
				<button
					type="button"
					onClick={handleDecrement}
					className="hover:opacity-75 transition-all duration-300 ease-linear"
				>
					<span className="sr-only">Decrement</span>
					<Image
						className="md:w-5 md:h-5"
						src="/images/icon-minus.svg"
						width={14}
						height={14}
						alt="decrement"
					/>
				</button>
				<p
					className="max-md:text-[16px] md:text-[18px] font-bold 
				text-veryDarkBlue min-w-[11px]"
				>
					{numberOfOrders}
				</p>
				<button
					type="button"
					onClick={handleIncrement}
					className="hover:opacity-75 transition-all duration-300 ease-linear"
				>
					<span className="sr-only">Increment</span>
					<Image
						className="md:w-5 md:h-5"
						src="/images/icon-plus.svg"
						width={14}
						height={14}
						alt="increment"
					/>
				</button>
			</fieldset>
			<button
				type="submit"
				className="flex items-center justify-center rounded-xl max-md:gap-3
                md:gap-4 max-md:h-14 md:h-16 max-md:w-full md:w-80
								bg-primaryOrange shadow-2xl shadow-shadowOrange
                hover:opacity-75 transition-all duration-300 ease-linear"
			>
				<Image
					className="brightness-[3] md:w-[26px] md:h-[26px]"
					src="/images/icon-cart.svg"
					width={20}
					height={22}
					alt=""
					aria-hidden="true"
				/>
				<span className="text-white font-bold max-md:text-[16px] md:text-[18px]">
					Add to cart
				</span>
			</button>
		</form>
	);
}
