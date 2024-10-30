import Image from "next/image";
import Link from "next/link";

const Card = ({ title }) => {
    return (
        <li className="bg-white border w-80 shadow hover:shadow-xl sm:w-full">
            <Link
                href={`/reviews/${title}`}
                className="flex flex-col sm:flex-row"
            >
                <Image
                    src={`/images/${title}.jpg`}
                    alt=""
                    width={320}
                    height={180}
                    className="rounded-t sm:rounded-l sm:rounded-r-none"
                />
                <h2 className="py-1 text-center sm:px-2">{title}</h2>
            </Link>
        </li>
    );
};

Card.displayName = "Card";

export default Card;
