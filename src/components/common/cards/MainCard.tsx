import { IoShareOutline } from "react-icons/io5";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { thumb1 } from "../../../assets/images/images.ts";
import { Profile1 } from "../../../assets/svgs/svg.ts";
import { Blog } from "../../../types/blog.ts";

type BlogListProps = {
  blogs: Blog[];
  // closeModal: () => void;
};

const MainCard: React.FC<BlogListProps> = ({ blogs }) => (
  <>
    {blogs.map((blog) => (
      <div key={blog.id} className=" max-w-screen-full mx-auto flex flex-col gap-3 shadow-md border border-Zomp py-4 px-4 rounded-xl my-4">
        {/* profile img, name, date */}
        <div className="flex items-center gap-2">
          <img
            src={blog.thumbnail || Profile1}
            alt="profile"
            className=" w-8 h-8 cursor-pointer"
          />
          <div>
            {/* {blog.map((blogs)=>(<h5 className=" text-sm font-semibold cursor-pointer">{blogs.author}</h5>))} */}
            <h5 className=" text-sm font-semibold cursor-pointer">{blog.author}</h5>
          </div>
          <h6 className=" text-sm">{ blog.date}</h6>
        </div>
        {/* card conent part */}
        <div className=" flex items-center justify-between gap-2">
          <div>
            <h2 className="  text-md font-semibold cursor-pointer mb-2">
              {blog.title}
            </h2>
            <p className=" text-sm w-3/4">
              {blog.message}
              <a className="text-Zomp ml-2" href="/post">
                Read more
              </a>
            </p>
          </div>
          <div>
            <img src={thumb1} alt="thumbnail" className="w-24 h-24 cursor-pointer" />
          </div>
        </div>
        {/* card footer */}
        <div className=" flex items-center justify-between">
          <div className=" flex items-center gap-2">
            <h5 className=" text-sm font-semibold cursor-pointer">
              {blog.category}
            </h5>
            <p className=" text-sm">5 min read</p>
            <IoShareOutline className="cursor-pointer text-xl" />
          </div>
          <div>
            <MdOutlineBookmarkAdd className="cursor-pointer text-xl" />
          </div>
        </div>
      </div>
    ))}
  </>
);

export default MainCard;
