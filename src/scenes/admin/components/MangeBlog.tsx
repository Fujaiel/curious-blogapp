import { IoSearchOutline } from "react-icons/io5";
import { FaSort } from "react-icons/fa";

const MangeBlog = () => (
  <div className=" max-w-screen-lg mx-auto my-2">
    {/* heading */}
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <h2 className=" font-semibold text-xl mb-4">Manage Blogs</h2>
      <div className=" relative flex-shrink-0">
        <input
          type="search"
          placeholder="Search"
          className=" border border-Zomp rounded-lg bg-transparent h-10 px-4 "
        />
        <div>
          <IoSearchOutline className="absolute top-2 right-4 inset-y-0  text-xl cursor-pointer" />
        </div>
      </div>
    </div>

    {/* table */}
    <table className="w-full bg-white border border-Zomp rounded-lg overflow-hidden shadow-md my-6">
      <thead className="bg-LightSilver text-left">
        <tr>
          <td>
            <th className="py-4 px-4 flex items-center gap-2">
              Title{" "}
              <span>
                <FaSort />{" "}
              </span>
            </th>
          </td>
          <td>
            <th className="py-4 px-4 flex items-center gap-2">
              Author <FaSort />
            </th>
          </td>
          <td>
            <th className="py-4 px-4 flex items-center gap-2">
              Date Posted <FaSort />
            </th>
          </td>
          <td>
            <th className="py-4 px-4 flex items-center gap-2">
              Category <FaSort />
            </th>
          </td>
          <td>
            <th className="py-4 px-4 flex items-center gap-2">
              Action <FaSort />
            </th>
          </td>
        </tr>
      </thead>

      <tbody>
        {/* 1st row */}
        <tr className=" border-b border-Zomp">
          <td className="py-4 px-4">Hot to be Billionare</td>
          <td className="py-2 px-4">Achinta Sharma</td>
          <td className="py-2 px-4">20 nov 2023</td>
          <td className="py-2 px-4">Web Development</td>
          <td className="py-2 px-4 ">
            <div className="flex gap-2">
              <button
                type="button"
                className=" bg-LightSilver hover:bg-SpaceCadet hover:text-white px-2 py-1 rounded-lg"
              >
                Edit
              </button>
              <button
                type="button"
                className=" bg-red-600 text-white hover:bg-SpaceCadet px-2 py-1 rounded-lg"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
        {/* 2nd row */}
        <tr className=" border-b border-Zomp">
          <td className="py-4 px-4">Become WebDevelooper</td>
          <td className="py-2 px-4">Achinta Sharma</td>
          <td className="py-2 px-4">20 nov 2023</td>
          <td className="py-2 px-4">Web Development</td>
          <td className="py-2 px-4 ">
            <div className="flex gap-2">
              <button
                type="button"
                className=" bg-LightSilver hover:bg-SpaceCadet hover:text-white px-2 py-1 rounded-lg"
              >
                Edit
              </button>
              <button
                type="button"
                className=" bg-red-600 text-white hover:bg-SpaceCadet px-2 py-1 rounded-lg"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>

        {/* 3rd row */}
        <tr className=" border-b border-Zomp">
          <td className="py-4 px-4">Music Heals everything</td>
          <td className="py-2 px-4">Fujaiel</td>
          <td className="py-2 px-4">20 nov 2023</td>
          <td className="py-2 px-4">Music</td>
          <td className="py-2 px-4 ">
            <div className="flex gap-2">
              <button
                type="button"
                className=" bg-LightSilver hover:bg-SpaceCadet hover:text-white px-2 py-1 rounded-lg"
              >
                Edit
              </button>
              <button
                type="button"
                className=" bg-red-600 text-white hover:bg-SpaceCadet px-2 py-1 rounded-lg"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>

    </table>
  </div>
);

export default MangeBlog;
