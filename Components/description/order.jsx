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
		<form onSubmit={handleSubmit} className="flex gap-5">
			<fieldset
				className="flex gap-14 bg-lightGrayishBlue w-[12rem] h-16
             items-center justify-center rounded-xl"
			>
				<button
					type="button"
					onClick={handleDecrement}
					className="hover:opacity-75 transition-all duration-300 ease-linear"
				>
					<span className="sr-only">Decrement</span>
					<Image
						src="/images/icon-minus.svg"
						width={20}
						height={20}
						alt="decrement"
					/>
				</button>
				<p className="text-[18px] font-bold text-veryDarkBlue min-w-[11px]">
					{numberOfOrders}
				</p>
				<button
					type="button"
					onClick={handleIncrement}
					className="hover:opacity-75 transition-all duration-300 ease-linear"
				>
					<span className="sr-only">Increment</span>
					<Image
						src="/images/icon-plus.svg"
						width={20}
						height={20}
						alt="increment"
					/>
				</button>
			</fieldset>
			<button
				type="submit"
				className="flex items-center justify-center rounded-xl
                gap-4 h-16 w-80 bg-primaryOrange shadow-2xl shadow-shadowOrange
                hover:opacity-75 transition-all duration-300 ease-linear"
			>
				<Image
					className="brightness-[3]"
					src="/images/icon-cart.svg"
					width={26}
					height={26}
					alt=""
					aria-hidden="true"
				/>
				<span className="text-white font-bold text-[18px]">
					Add to cart
				</span>
			</button>
		</form>
	);
}
