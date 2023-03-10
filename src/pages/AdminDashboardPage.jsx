import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../authContext";
import DashboardList from "../components/DashboardList";

const AdminDashboardPage = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  function onLogout() {
    dispatch({
      type: "LOGOUT",
    });

    navigate("/admin/login");
  }

  return (
    <>
      <div className="w-full text-7xl h-min-screen bg-[#111111]">
        <div className="px-16">
          <div className="flex justify-between w-full py-7">
            <h1 className=" text-[48px] font-[900] text-white">APP</h1>
            <button
              onClick={onLogout}
              className="rounded-3xl bg-[#9BFF00] px-8 font-[100] text-[16px] flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-person "
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
              </svg>
              Logout
            </button>
          </div>

          {/* Leaderboard */}
          <div className="flex mt-10  items-stretch justify-between">
            <div className="font-[100] text-[40px] text-white">
              Today's Leaderboard
            </div>
            <div className="bg-[#1d1d1d] text-white flex gap-3 items-center uppercase text-[16px] rounded-lg p-3">
              <div>30 May 2022</div>
              <div className="bg-[#9BFF00] p-2 rounded-lg text-[#000]">
                Submission open
              </div>
              <div>11:34</div>
            </div>
          </div>
          {/* Leaderboard */}

          {/* Table */}
          <table className="table-auto text-[16px] text-white py-11 border-separate w-full">
            <thead>
              <tr>
                <th scope="col" className="px-2">
                  #
                </th>
                <th scope="col" className="text-start px-5">
                  Title
                </th>
                <th scope="col" className="px-10">
                  Author
                </th>
                <th scope="col" className="text-end">
                  Most Liked
                </th>
              </tr>
            </thead>
            <tbody>
              {new Array(7).fill(0).map((index) => {
                return <DashboardList />;
              })}
            </tbody>
          </table>
          {/* Table */}
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
