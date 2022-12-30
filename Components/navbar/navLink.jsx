import Link from "next/link";

export default function NavLink({ title }) {
	return (
		<li className="text-darkGrayishBlue hover:text-veryDarkBlue transition-all duration-300 ease-linear">
			<Link href="">{title}</Link>
		</li>
	);
}
