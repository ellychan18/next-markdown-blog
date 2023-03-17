import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Head from "next/head";
import hljs from "highlight.js";
import Header from "@/components/Header";
import { sortByDate } from "@/utils";
import JumpToTop from "@/components/JumpToTop";
import Toc from "@/components/Toc";

// marked.setOptions({
//   highlight: function (code, lang, callback) {
//     require("pygmentize-bundled")(
//       { lang: lang, format: "html" },
//       code,
//       function (err, result) {
//         callback(err, result.toString());
//       }
//     );
//   },
// });

marked.setOptions({
  langPrefix: "hljs language-",
  highlight: function (code) {
    return hljs.highlightAuto(code, [
      "html",
      "javascript",
      "php",
      "bash",
      "python",
      "shell",
    ]).value;
    // return hljs.highlightAll(code);
  },
});

export default function PostPage({
  frontmatter: {
    title,
    tag,
    date,
    excerpt,
    cover_image,
    author_name,
    author_title,
    author_image,
  },
  slug,
  content,
  posts,
}) {
  return (
    <>
      <Head>
        <title>Arman Blog | {title}</title>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta name="author" content={author_name} />
        <meta property="og:locale" content="id" />
        <meta name="description" content={excerpt} />
        <meta property="og:description" content={excerpt} />
        {/* <link rel="canonical" href="<?= getLink("Domain"); ?>/post/post.php?id=<?= $id; ?>" /> */}

        {/* <meta property="og:url" content="<?= getLink("Domain"); ?>/post/post.php?id=<?= $id; ?>" /> */}
        <meta property="og:site_name" content={author_name} />
        <meta property="og:country-name" content="Indonesia" />
        <meta property="og:image" content={cover_image} />
        <meta property="og:image:width" content="460" />
        <meta property="og:image:height" content="230" />
        {/* <meta property="og:type" content="<?= getLink("Domain"); ?>/post/post.php?id=<?= $id; ?>" /> */}
        <meta property="og:image:type" content="image/jpeg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:author" content={author_name} />
        <meta property="twitter:image:src" content={cover_image} />
      </Head>
      <Header frontmatter={posts} />

      <div className="container mx-10 px-10 mt-5">
        <div className="md:w-6/12 w-full mx-auto flex items-center flex-col">
          <div className="flex items-center text-zinc-500 space-x-4">
            <div className="capitalize text-base">
              <Link href={`/${tag.toLowerCase()}`}>{tag}</Link>
            </div>
            <span>•</span>
            <div>{date}</div>
          </div>
          <h2 className="text-2xl mt-4 text-center text-slate-200">{title}</h2>
          <div className="flex items-center mt-5">
            <img
              src={author_image}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="ml-4">
              <h3 className="text-zinc-300">{author_name}</h3>
              <div className="text-zinc-500 text-sm mt-1">{author_title}</div>
            </div>
          </div>
        </div>
        <div className="md:w-10/12 w-full mx-auto my-10">
          <img src={cover_image} className="w-full rounded-lg" />
        </div>
        <div className="w-full mx-auto mb-5 overflow-x-auto prose prose-table:table-auto prose-table:border-separate prose-th:bg-zinc-900 prose-th:text-gray-200 prose-th:font-sans prose-th:p-4 prose-table:border prose-td:p-4 prose-tr:bg-zinc-800 prose-tr:text-gray-400 max-w-3xl prose-blockquote:border-yellow-400 prose-blockquote:bg-zinc-800 prose-blockquote:text-gray-400 prose-blockquote:not-italic prose-blockquote:px-5 prose-blockquote:py-2 prose-blockquote:rounded">
          <Toc content={content} />
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
      <JumpToTop />
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const allMarkdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(allMarkdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      frontmatter,
      slug,
      content,
      posts: posts.sort(sortByDate),
    },
  };
}
