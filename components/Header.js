import Link from "next/link";
import { useState } from "react";
import { FaBars, FaSearch, FaAngleDown } from "react-icons/fa";

export default function Header({ frontmatter }) {
  const [dropdown, setDropdown] = useState(false);
  const [offcavnas, setOffcanvas] = useState(false);
  const [iconSearch, setIconSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState(frontmatter);
  // console.log(`type of: ${typeof posts}`);
  // posts.map((post) => {
  //   console.log(post);
  // });
  const dropdownList = [
    { text: "Internet", href: "/posts" },
    { text: "Books", href: "/posts" },
    { text: "Open Source", href: "/posts" },
  ];

  return (
    <header>
      <nav className="py-10">
        <div className="mx-auto px-10">
          <div className="flex items-center">
            <div className="w-3/12 lg:hidden">
              <button onClick={() => setOffcanvas(!offcavnas)}>
                <FaBars />
              </button>
            </div>
            <div className="lg:w-2/12 w-6/12">
              <Link href="/" legacyBehavior>
                <a className="flex items-center justify-center lg:justify-start">
                  <div className="w-10 h-10 bg-black text-white rounded flex items-center justify-center mr-5 shadow-2xl">
                    A
                  </div>
                  Arman
                </a>
              </Link>
            </div>
            <div className="w-3/12 lg:hidden text-right">
              <button onClick={() => setIconSearch(!iconSearch)}>
                <FaSearch />
              </button>
            </div>
            <div
              className={`lg:w-7/12 w-full bg-white fixed lg:static top-0 h-full lg:h-auto p-10 lg:p-0 transition-all ${
                offcavnas ? "left-0" : "-left-full"
              }`}
            >
              <button
                className="absolute top-10 right-10 lg:hidden"
                onClick={() => setOffcanvas(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <ul className="lg:space-x-14 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
                <li>
                  <Link href="/posts" legacyBehavior>
                    <a className="hover:underline">Networking</a>
                  </Link>
                </li>
                <li>
                  <Link href="/posts" legacyBehavior>
                    <a className="hover:underline">Programming</a>
                  </Link>
                </li>
                <li className="relative">
                  <a
                    className="hover:underline cursor-pointer flex items-center"
                    onClick={() => setDropdown(!dropdown)}
                  >
                    Lainnya
                    <FaAngleDown
                      className={`ml-1 ${dropdown ? "rotate-180" : ""}`}
                    />
                  </a>
                  {dropdown && (
                    <ul className="absolute w-[200px] bg-black rounded shadow-2xl mt-4">
                      {dropdownList.map(({ text, href }) => (
                        <li
                          key={text}
                          className="border-b border-white/5 last:border-0"
                        >
                          <Link href={href} legacyBehavior>
                            <a className="flex py-3 px-6 hover:bg-gray-700/60 text-white">
                              {text}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </div>
            <div
              className={`lg:w-3/12 absolute lg:static w-full left-0 px-10 lg:px-0 transition-all ${
                iconSearch ? "top-10" : "-top-40"
              }`}
            >
              <button
                className="absolute top-3 right-14 lg:hidden"
                onClick={() => setIconSearch(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <input
                className="border-2 py-2 px-6 w-full lg:rounded-full rounded-lg bg-search"
                placeholder="Search ..."
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              {search && (
                <div
                  className={`absolute ${
                    iconSearch && "w-9/12"
                  } border divide-y shadow bg-white ...`}
                >
                  {posts
                    .filter((val) => {
                      if (search === "") {
                        return val;
                      } else if (
                        val.slug
                          .replace(/\-/g, " ")
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase())
                      ) {
                        return val;
                      } else if (
                        val.frontmatter.tag
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((post, index) => {
                      return (
                        <Link
                          href={`/blog/${post.slug}`}
                          key={index}
                          legacyBehavior
                        >
                          <a className="block p-2 hover:bg-indigo-50 ...">
                            {post.slug.replace(/\-/g, " ")}
                          </a>
                        </Link>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
