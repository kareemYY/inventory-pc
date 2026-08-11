import "./sideBarStyle/sideBarStyle.css";

export const SideBar = () => {
  return (
    <div className="sideBar-props-header d-none d-lg-block">
      <div className=" main-header d-flex align-items-center justify-content-center px-1 pt-2">
        <span className="material-symbols-outlined main-icon-pc main_icon_style">
          desktop_windows
        </span>
        <h4 className="text-white px-2">Inventory System</h4>
      </div>
      <hr className="text-white" />
      <ul className="nav nav-tabs flex-column mt-3  sideBar-props ">
        <li className="nav-item">
          <a className="nav-link  " aria-current="page" href="#">
            <span className="material-symbols-outlined icon-props">
              grid_view
            </span>
            Dashboard
          </a>
        </li>
        <li className="nav-item  ">
          <a className="nav-link active" href="#">
            <span className="material-symbols-outlined icon-props">
              desktop_windows
            </span>
            Computers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span className="material-symbols-outlined icon-props">
              apartment
            </span>
            Branshes
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-disabled="true">
            <span className="material-symbols-outlined icon-props">
              graph_2
            </span>
            Sectors
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-disabled="true">
            <span className="material-symbols-outlined icon-props">
              analytics
            </span>
            Reports
          </a>
        </li>
      </ul>
    </div>
  );
};
