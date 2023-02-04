import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="md:w-4/12 w-full px-4 py-6">
      <article>
        <Link href={`/blog/${post.slug}`} legacyBehavior>
          <a>
            <img
              src={post.frontmatter.cover_image}
              className="w-full rounded-xl mb-4"
            />
          </a>
        </Link>
        <div className="flex items-center text-black/60 space-x-4">
          <div className="capitalize text-base">{post.frontmatter.tag}</div>
          <span>•</span>
          <div>{post.frontmatter.date}</div>
        </div>
        <h2 className="text-xl mt-4 ">
          <Link href={`/blog/${post.slug}`} legacyBehavior>
            <a>{post.frontmatter.title}</a>
          </Link>
        </h2>
        <p className="text-black/60 mt-5 w-10/12">{post.frontmatter.excerpt}</p>
        <div className="flex items-center mt-5">
          <img
            src={post.frontmatter.author_image}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="ml-4">
            <h3>{post.frontmatter.author_name}</h3>
            <div className="text-black/60 text-sm mt-1">
              {post.frontmatter.author_title}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
