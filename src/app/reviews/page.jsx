import Heading from "@/components/Heading";
import Card from "@/components/Card";

import { getReviewList, getSlugs } from "@/lib/review";

export const metadata = {
    title: "Reviews",
};

export const generateStaticParams = async () => {
    const slugs = await getSlugs();
    return slugs.map((slug) => ({ slug }));
};

export default async function ReviewPage() {
    const reviews = await getReviewList();
    return (
        <>
            <Heading>Reviews</Heading>
            <ul className="flex flex-row flex-wrap gap-3">
                {reviews.map((review) => (
                    <Card key={review.slug} title={review.slug} />
                ))}
            </ul>
        </>
    );
}
