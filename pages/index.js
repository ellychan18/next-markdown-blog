import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";
import { sortByDate } from "../utils";
import Header from "@/components/Header";
import Card from "@/components/Card";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Dev Blog</title>
      </Head>
      <Header frontmatter={posts} />

      <Card posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  // Get files from the posts directory
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and fontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
