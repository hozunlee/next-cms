import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <ul className="flex gap-2">
                <li>
                    <Link href="/" className="text-fuchsia-500 hover:underline">
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className="text-fuchsia-500 hover:underline"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href="/reviews"
                        className="text-fuchsia-500 hover:underline"
                    >
                        review
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
