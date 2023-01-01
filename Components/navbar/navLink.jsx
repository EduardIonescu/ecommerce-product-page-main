import Link from "next/link";

export default function NavLink({ title }) {
	return (
		<li
			className="text-darkGrayishBlue md:hover:text-veryDarkBlue
		 md:transition-all md:duration-300 md:ease-linear max-md:mb-5 max-md:font-bold
		 max-md text-[18px]"
		>
			<Link href="">{title}</Link>
		</li>
	);
}
