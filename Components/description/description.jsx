import Order from "./order";
export default function Description({ windowWidth, changeOrders }) {
	return (
		<section
			className="max-md:p-5 max-md:w-full max-md:relative md:w-[530px]
		max-md:pb-20"
		>
			<p
				className="md:mt-20 uppercase text-primaryOrange 
        font-bold tracking-widest max-md:text-[12px]"
			>
				sneaker company
			</p>
			<h1
				className="capitalize font-bold text-veryDarkBlue max-md:text-[1.75rem]
			max-md:leading-8 md:text-[3.3rem] md:leading-[3.6rem] mt-3 md:mb-7 
			max-md:mb-4"
			>
				fall limited edition sneakers
			</h1>
			<p
				className="text-darkGrayishBlue max-md:leading-6 md:leading-8
				 max-md:text-[15px] md:text-[19px] "
			>
				These low-profile sneakers are your perfect casual wear
				companion. Featuring a durable rubber outer sole, they’ll
				withstand everything the weather can offer.
			</p>
			<div
				className="max-md:flex max-md:justify-between max-md:items-center
			max-md:mt-7 max-md:mb-6"
			>
				<p
					className="max-md:inline-flex md:flex items-center gap-5 
			 md:mt-9"
				>
					<span className="text-3xl font-bold text-veryDarkBlue">
						$125.00
					</span>
					<span
						className="max-md:px-2 md:px-3 max-md:py-[2px] md:py-1
					 max-md:text-[15px] md:text-[18px] text-primaryOrange rounded-md
					font-bold bg-paleOrange"
					>
						50%
					</span>
				</p>
				<p
					className="line-through font-bold max-md:text-[16px] md:text-[18px]
					max-md:inline-block max-md:justify-self-end text-grayishBlue 
					md:mt-3 md:mb-12"
				>
					$250.00
				</p>
			</div>
			<Order changeOrders={changeOrders} />
		</section>
	);
}
