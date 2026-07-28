export const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3 ">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <button
            data-bs-target="#navbarNavDropdown"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <span className="material-symbols-outlined logo-icon">
            desktop_windows
          </span>
          <span className="navbar-brand ms-3">PC Inventory</span>
        </div>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/*<a className="nav-link" href="#">
                Home
              </a>*/}
            </li>
            <li className="nav-item">
              {/*<a className="nav-link" href="#">
                Search Books
              </a>*/}
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item m-1">
              <a type="button" className="btn btn-outline-dark" href="#">
                Sign in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
