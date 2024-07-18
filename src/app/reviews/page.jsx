import Heading from "@/components/Heading";
import Card from "@/components/Card";

export default function reviewPage() {
    return (
        <>
            <Heading>Reviews</Heading>
            <ul className="flex flex-col gap-3">
                <Card title={"hollow-knight"} />

                <Card title={"poketmon"} />
            </ul>
        </>
    );
}
