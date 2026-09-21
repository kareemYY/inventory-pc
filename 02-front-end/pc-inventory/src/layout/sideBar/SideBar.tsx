import { NavLink } from "react-router-dom";
import "./sideBarStyle/sideBarStyle.css";

export const SideBar = () => {
  return (
    <div className="d-flex align-items-start flex-column  sideBar-props-header">
      <div className=" mb-auto p-2  d-none d-lg-block">
        <div className=" main-header d-flex align-items-center justify-content-center px-1 pt-2">
          <span className="material-symbols-outlined main-icon-pc main_icon_style">
            desktop_windows
          </span>
          <h4 className="text-white px-2">Inventory System</h4>
        </div>
        <hr className="text-white" />
        <ul className="nav nav-tabs flex-column mt-3  sideBar-props ">
          <li className="nav-item">
            <NavLink className="nav-link  " to="/dashboard">
              <span className="material-symbols-outlined icon-props">
                grid_view
              </span>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item " aria-current="page">
            <NavLink className="nav-link " to="/computers">
              <span className="material-symbols-outlined icon-props">
                desktop_windows
              </span>
              Computers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/branches">
              <span className="material-symbols-outlined icon-props">
                apartment
              </span>
              Branches
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/sectors">
              <span className="material-symbols-outlined icon-props">
                graph_2
              </span>
              Sectors
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/reports">
              <span className="material-symbols-outlined icon-props">
                bar_chart
              </span>
              Reports
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="pb-3">
        <span className="text-light fs-6">Developed by </span>
        <span className="text-light text-muted">: kareem yasser </span>
      </div>
    </div>
  );
};
