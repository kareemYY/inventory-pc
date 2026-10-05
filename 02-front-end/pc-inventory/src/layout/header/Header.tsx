import { useState } from "react";
import "./headerStyle/HeaderStyle.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();
  const pathName = window.location.pathname.split("/")[1];

  const handleSearch = () => {
    if (!searchInput.trim()) return;
    if (pathName === "computers") {
      navigate(`/computers?search=${encodeURIComponent(searchInput)}`);
      setSearchInput("");
    }
    if (pathName === "branches") {
      navigate(`/branches?search=${encodeURIComponent(searchInput)}`);
      setSearchInput("");
    }
  };
  return (
    <>
      <div className="mt-2  header-container d-flex align-items-center justify-content-between min-vh-9">
        <div className="d-flex ">
          <div className="d-block d-lg-none">
            <button
              className="btn btn-outline-light menu-button"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#sidebar"
              aria-controls="offcanvasExample"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>

        <div className=" d-flex align-items-center gap-2 ">
          <button className="btn p-0">
            <span className="material-symbols-outlined header-icon px-2">
              notifications
            </span>
          </button>
          <li className="nav-item align-items-center d-flex">
            <span className="material-symbols-outlined">light_mode</span>
            <div className="ms-2 form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="themingSwitcher"
                onChange={() => {
                  const htmlElement = document.documentElement;
                  if (htmlElement) {
                    htmlElement.setAttribute(
                      "data-bs-theme",
                      htmlElement.getAttribute("data-bs-theme") === "dark"
                        ? "light"
                        : "dark",
                    );
                  }
                }}
              />
            </div>
            <span className="material-symbols-outlined">dark_mode</span>
          </li>
          <button
            type="button"
            className="btn btn-outline-secondary btn-props "
          >
            <span className="material-symbols-outlined person-icon-props">
              person
            </span>
            SignUp
          </button>
        </div>
      </div>
      <hr className="d-none d-lg-block" />

      {/* Mobile */}
      <div className="d-block d-lg-none mt-3">
        <div className="  input-group ">
          <span className="input-group-text material-symbols-outlined search-icon">
            search
          </span>
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            type="text"
            className="form-control background"
            placeholder="Search...."
            aria-label="PC_Number"
            aria-describedby="basic-addon1"
          ></input>
        </div>
      </div>
    </>
  );
};
