export const SearchOfBranch = () => {
  return (
    <div className="d-flex align-items-center justify-content-center ">
      <div className="  d-flex align-items-center justify-content-center gap-3 back_ground_search m-2 py-2 px-4 rounded shadow-md">
        <div className=" p-2">
          <input
            type="text"
            className="form-control background "
            placeholder="Search by branch name..."
            aria-label="PC_Number"
            aria-describedby="basic-addon1"
          ></input>
        </div>

        <div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Governorate
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Area Manager
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <button className="btn btn-outline-secondary d-flex btn-md shadow-md align-items-center px-3">
            <span className="material-symbols-outlined fs-5">restart_alt</span>
            <span>Reset</span>
          </button>
        </div>
        <div>
          <button className="btn btn-outline-primary d-flex btn-md shadow-md align-items-center px-3">
            <span className="material-symbols-outlined fs-5">search</span>
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};
