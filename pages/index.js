import { useState } from "react";
import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";
import Post from "@/components/Post";
import { sortByDate } from "../utils";

export default function Home({ posts }) {
  const [featured, setFeatured] = useState(posts[0]);
  const [cards, setCards] = useState(posts.slice(1));
  return (
    <>
      <Head>
        <title>Dev Blog</title>
      </Head>

      <div className="container mx-auto px-10">
        {/* Start Featured Post */}
        <article>
          <div className="flex -mx-4 lg:items-center items-start flex-wrap">
            <div className="px-4 lg:w-8/12 md:w-7/12 w-full">
              <a href={`/blog/${featured.slug}`}>
                <img
                  src={featured.frontmatter.cover_image}
                  className="rounded-xl w-full mb-4 md:mb-0"
                />
              </a>
            </div>
            <div className="lg:w-4/12 md:w-5/12 w-full px-4">
              <div className="flex items-center text-black/60 space-x-4">
                <div className="uppercase text-xs">
                  {featured.frontmatter.tag}
                </div>
                <span>•</span>
                <div className="">{featured.frontmatter.date}</div>
              </div>
              <h2 className="text-xl mt-4">
                <a href={`/blog/${featured.slug}`}>
                  {featured.frontmatter.title}
                </a>
              </h2>
              <p class="text-black/60 mt-2 w-10/12">
                {featured.frontmatter.excerpt}
              </p>
              <div class="flex items-center mt-5">
                <img
                  src={featured.frontmatter.author_image}
                  class="w-14 h-14 rounded-full object-cover"
                />
                <div class="ml-4">
                  <h3>{featured.frontmatter.author_name}</h3>
                  <div class="text-black/60 text-sm mt-1">
                    {featured.frontmatter.author_title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        {/* End Featured Post */}

        {/* Start Card */}
        <div className="flex -mx-4 flex-wrap mt-6">
          {cards.map((card, index) => {
            return <Post post={card} key={index} />;
          })}
        </div>
        {/* End Card */}
      </div>
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
