import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export async function getFeaturedReview() {
    const reviews = await getReviewList();
    return reviews[0];
}

export const getReview = async (slug) => {
    const text = await readFile(`./src/content/reviews/${slug}.md`, "utf-8");
    const {
        content,
        data: { title, date, image },
    } = matter(text);
    const body = marked(content, { headerIds: false, mangle: false });

    return { slug, title, date, image, body };
};

export const getReviewList = async () => {
    const slugs = await getSlugs();

    const reviews = [];
    for (const slug of slugs) {
        const review = await getReview(slug);
        reviews.push(review);
    }

    console.log("🚀 ~ getReviewList ~ reviews:", reviews);
    //TODO sort reviews by date
    reviews.sort((a, b) => new Date(b.date) - new Date(a.date));

    return reviews;
};

export const getSlugs = async () => {
    const files = await readdir("./src/content/reviews");
    return files
        .filter((file) => file.endsWith(".md"))
        .map((file) => file.slice(0, -".md".length));
};
