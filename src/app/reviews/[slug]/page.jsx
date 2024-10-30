import { getReview, getSlugs } from "@/lib/review";
import Heading from "@/components/Heading";
import SharedLink from "@/components/ShareLinkButton";

import Image from "next/image";

export async function generateStaticParams() {
    const slugs = await getSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
    const { title } = await getReview(slug);
    return {
        title: title,
    };
}

export default async function Game({ params: { slug } }) {
    const { title, date, image, body } = await getReview(slug);
    return (
        <>
            <Heading>{title}</Heading>
            <div className="flex gap-3 items-baseline my-1">
                <p className="italic pb-2"> {date}</p>
                <SharedLink />
            </div>
            <Image src={image} alt={`${title} img`} width={300} height={400} />
            <article
                dangerouslySetInnerHTML={{ __html: body }}
                className="prose max-w-screen-sm prose-slate"
            ></article>
        </>
    );
}
