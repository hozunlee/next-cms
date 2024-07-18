import { readFile } from "node:fs/promises";
import { marked } from "marked";
import Heading from "@/components/Heading";

export default async function Game() {
    const text = await readFile("./src/content/reviews/poketmon.md", "utf-8");
    const html = marked(text);
    return (
        <>
            <Heading>Poketmon</Heading>
            <img src="/images/poketmon.jpg" alt="" />
            <article dangerouslySetInnerHTML={{ __html: html }}></article>
        </>
    );
}
