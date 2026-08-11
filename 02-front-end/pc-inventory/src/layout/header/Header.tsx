import "./headerStyle/HeaderStyle.css";

export const Header = () => {
  return (
    <>
      <div className="mt-1  header-container d-flex align-items-center justify-content-between">
        <div className="d-flex ">
          <div className="d-block d-lg-none">
            <button
              className="btn btn-outline-light menu-button "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#staticBackdrop"
              aria-controls="staticBackdrop"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
        <div className=" d-none d-lg-flex justify-content-center ">
          <div className="  input-group  search-container">
            <span className="input-group-text material-symbols-outlined search-icon">
              search
            </span>
            <input
              type="text"
              className="form-control background"
              placeholder="Search...."
              aria-label="PC_Number"
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>

        <div className=" d-flex align-items-center gap-2 ">
          <span className="material-symbols-outlined header-icon px-2">
            notifications
          </span>
          <span className="material-symbols-outlined header-icon">
            dark_mode
          </span>
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
