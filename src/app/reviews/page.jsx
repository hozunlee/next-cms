import Link from "next/link";

export default function reviewPage() {
    return (
        <>
            <h1>내 소개를 해볼까</h1>
            <ul>
                <li>
                    <Link href={"/reviews/night"}>night</Link>
                </li>
                <li>
                    <Link href={"/reviews/poketmon"}>poketmon</Link>
                </li>
            </ul>
        </>
    );
}
