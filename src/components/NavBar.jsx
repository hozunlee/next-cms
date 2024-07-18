import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <ul className="flex gap-2 ">
                <li>
                    <Link
                        href="/"
                        className="font-orbitron font-bold text-fuchsia-500 hover:underline"
                    >
                        Hojun Gamer
                    </Link>
                </li>
                <li className="ml-auto">
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
                        Reviews
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
