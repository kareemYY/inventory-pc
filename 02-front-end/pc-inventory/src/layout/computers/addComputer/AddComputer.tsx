import ".//AddComputer.css";
export const AddComputer = () => {
  return (
    <>
      <div className="page_back_ground_add_computer align-items-center justify-content-center">
        <div className="d-flex align-items-center   p-3 m-0 ">
          <span> Computers</span>
          <span className="material-symbols-outlined arrow_icon">
            chevron_right
          </span>
          <span>Add Computer</span>
        </div>
        <div className="d-flex align-items-center justify-content-around  px-3 ">
          <div>
            <div>
              <h3> Add New Computer</h3>
            </div>
            <div>
              <span>
                {" "}
                Fill in the details to add a new computer to inventory.
              </span>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-light back_to_computers_button"
          >
            <span className="material-symbols-outlined arrow_icon pe-2">
              arrow_back
            </span>
            Back To Computers
          </button>
        </div>
        <div className="d-flex justify-content-center ">
          <div className="d-none d-lg-flex mt-3 row general_information_form p-4 g-2">
            <div className="col-12  p-2 ">
              <h5> General Informaion</h5>
            </div>
            <div className="col-4 ">
              <label className="label_form">
                Asset Code <span style={{ color: "red" }}>*</span>
              </label>
              <input className="input"></input>
            </div>
            <div className="col-4 ">
              <label className="label_form">
                Model <span style={{ color: "red" }}>*</span>
              </label>
              <input className="input"></input>
            </div>
            <div className="col-4">
              <label className="label_form">
                Status <span style={{ color: "red" }}>*</span>
              </label>
              <input className="input"></input>
            </div>
            <div className="col-4">
              <label className="label_form">
                processor <span style={{ color: "red" }}>*</span>
              </label>
              <input className="input"></input>
            </div>
            <div className="col-4">
              <label className="label_form">
                Ram (GB)<span style={{ color: "red" }}>*</span>
              </label>
              <input className="input"></input>
            </div>
            <div className="col-4">
              <label className="label_form">
                SSD (GB) <span style={{ color: "red" }}>*</span>
              </label>
              <input className="input"></input>
            </div>
            <div className="col-4">
              <label className="label_form">
                HDD (GB) <span style={{ color: "red" }}>*</span>
              </label>
              <input className="input"></input>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center ">
          <div className="d-none d-lg-block mt-3 general_information_form p-4 g-3">
            <h5> Assignment Informaion</h5>
            <div className="d-flex justify-content-center gap-5">
              <div>
                <label className="label_form">
                  Branch Code : <span style={{ color: "red" }}>*</span>
                </label>
                <input className="input"></input>
              </div>
              <div>
                <label className="label_form">Employee Code :</label>
                <input className="input"></input>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center ">
          <div className="mt-3 general_information_form p-4 g-3">
            <h5> Add Notes</h5>
            <textarea className="w-100" rows={3}></textarea>
          </div>
        </div>
        <div className=" d-flex justify-content-center  ">
          <button className="btn btn-primary  button_submit mt-2"> Save</button>
        </div>
      </div>
    </>
  );
};
