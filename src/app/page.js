import Card from "@/components/Card";
import Heading from "@/components/Heading";
import { getFeaturedReview } from "@/lib/review";

export default async function Home() {
    const featuredReview = await getFeaturedReview();
    return (
        <>
            <Heading>Main game</Heading>
            <Card title={featuredReview.title} />
        </>
    );
}
