export default function Description() {
	return (
		<section className="w-[530px]">
			<p
				className="mt-20 uppercase text-primaryOrange 
        font-bold tracking-widest"
			>
				sneaker company
			</p>
			<h1 className="capitalize font-bold text-veryDarkBlue text-[3.3rem] mt-3 mb-7">
				fall limited edition sneakers
			</h1>
			<p className="text-darkGrayishBlue leading-8 text-[19px]">
				These low-profile sneakers are your perfect casual wear
				companion. Featuring a durable rubber outer sole, they’ll
				withstand everything the weather can offer.
			</p>
			<p className="flex items-center gap-5 mt-9">
				<span className="text-3xl font-bold text-veryDarkBlue">
					$125.00
				</span>
				<span
					className="px-3 py-1 text-[18px] text-primaryOrange rounded-md 
                                font-bold bg-paleOrange"
				>
					50%
				</span>
			</p>
			<p className="line-through font-bold text-[18px] text-grayishBlue mt-4">
				$250.00
			</p>
		</section>
	);
}
