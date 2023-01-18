import fs from "fs";
import path from "path";
import Header from "@/components/Header";
import matter from "gray-matter";
import { sortByDate } from "@/utils";
import Card from "@/components/Card";

export default function Networking({ posts }) {
  const networking = posts.filter((val) => {
    if (val.frontmatter.tag.toLowerCase().includes("networking")) {
      return val;
    }
  });
  return (
    <>
      <Header frontmatter={posts} />
      {/* {console.log(posts[0].frontmatter)} */}
      <Card posts={networking} />
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
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
