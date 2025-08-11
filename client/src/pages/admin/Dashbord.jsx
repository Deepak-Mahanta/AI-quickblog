import React, { useEffect, useState } from "react";
import { assets, dashboard_data } from "../../assets/assets";
import BlogTableItem from "../../components/admin/BlogTableItem";
import toast from "react-hot-toast";
import { data } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const Dashbord = () => {
  const [dashbordData, setDashbordData] = useState({
    blogs: 0,
    comments: 0,
    draft: 0,
    recentBlogs: [],
  });

  const { axios } = useAppContext();

  const fetchDashbord = async () => {
    // setDashbordData(dashboard_data) dummy data for dashbord

    try {
      const { data } = await axios.get("/api/admin/dashboard");
      data.success
        ? setDashbordData(data.dashbordData): toast.error(data.message);
    } catch (error) {
      toast.error(data.message);
    }
  };

  useEffect(() => {
    fetchDashbord();
  }, []);

  return (
    <div className="flex-1 p-4 md:p-10 bg-blue-50/50">
      <div className="flex flex-wrap gap-4">
        <div
          className="flex items-center gap-4 bg-white p-4 min-w-48
         rounded shadow cursor-pointer hover:scale-105 transition-all"
        >
          <img src={assets.dashboard_icon_1} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashbordData.blogs}
            </p>
            <p className="text-gray-400 fontli">Blogs</p>
          </div>
        </div>

        <div
          className="flex items-center gap-4 bg-white p-4 min-w-48
         rounded shadow cursor-pointer hover:scale-105 transition-all"
        >
          <img src={assets.dashboard_icon_2} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashbordData.comments}
            </p>
            <p className="text-gray-400 fontli">Commets</p>
          </div>
        </div>

        <div
          className="flex items-center gap-4 bg-white p-4 min-w-48
         rounded shadow cursor-pointer hover:scale-105 transition-all"
        >
          <img src={assets.dashboard_icon_3} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashbordData.draft}
            </p>
            <p className="text-gray-400 fontli">Drafts</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-3 m-4 mt-6 text-gray-600">
          <img src={assets.dashboard_icon_4} alt="" />
          <p>Latest Blogs</p>
        </div>
        <div className=" relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white ">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-xs text-gray-600  text-left uppercase">
              <tr>
                <th scope="col" className="px-2 py-4 xl:px-6">
                  {" "}
                  #
                </th>
                <th scope="col" className="px-2 py-4">
                  {" "}
                  Blog Title
                </th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  {" "}
                  Date
                </th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  {" "}
                  Status
                </th>
                <th scope="col" className="px-2 py-4">
                  {" "}
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {dashbordData.recentBlogs.map((blog, index) => {
                return (
                  <BlogTableItem
                    key={blog._id}
                    blog={blog}
                    fetchBlogs={fetchDashbord}
                    index={index + 1}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
