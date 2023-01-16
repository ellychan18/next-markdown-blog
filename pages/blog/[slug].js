import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import hljs from "highlight.js";

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
    cover_image,
    author_name,
    author_title,
    author_image,
  },
  slug,
  content,
}) {
  return (
    <>
      {/* <Link href="/" legacyBehavior className="mb-10">
        <a
          className="rounded-lg px-4 py-3 ml-10 border-2 border-black"
          style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
        >
          Go Back
        </a>
      </Link> */}

      <div className="container mx-10 px-10 mt-5">
        <div class="md:w-6/12 w-full mx-auto flex items-center flex-col">
          <div class="flex items-center text-black/60 space-x-4">
            <div class="uppercase">{tag}</div>
            <span>•</span>
            <div>{date}</div>
          </div>
          <h2 class="text-2xl mt-4 text-center">
            <a href="/detail">{title}</a>
          </h2>
          <div class="flex items-center mt-5">
            <img
              src={author_image}
              class="w-14 h-14 rounded-full object-cover"
            />
            <div class="ml-4">
              <h3>{author_name}</h3>
              <div class="text-black/60 text-sm mt-1">{author_title}</div>
            </div>
          </div>
        </div>
        <div class="md:w-10/12 w-full mx-auto my-10">
          <img src={cover_image} class="w-full rounded-lg" />
        </div>
        <div class="w-full md:w-10/12 mx-auto mb-5">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
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

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
