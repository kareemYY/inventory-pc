import type { ComputerModel } from "../../../models/ComputerModel";
import "../ComputerPage.css";

export const CardDetails = (props: ComputerModel) => {
  const updateStorage = (ssd: number | null, hdd: number | null) => {
    if (ssd === null && hdd === null) {
      return "No Storage";
    }
    if (hdd === null) {
      return `${ssd} SSD`;
    }
    if (ssd === null) {
      return `${hdd} HDD`;
    } else {
      return `${ssd} SSD / ${hdd} HDD`;
    }
  };

  const udateEmployeeName = (employee: string | null) => {
    if (employee === null) {
      return `Without Employee`;
    }
    if (employee.length > 15) {
      return `${employee.substring(0, 12)}...`;
    } else {
      return employee;
    }
  };
  const updateBranch = (branchName: string | null) => {
    if (branchName === null) {
      return "Without Branch";
    } else {
      return branchName;
    }
  };
  const updateRam = (ram: number | null) => {
    if (ram === null) {
      return `Without RAM`;
    } else {
      return `${ram} GB`;
    }
  };
  return (
    <div className="card shadow  rounded ">
      <div className="d-flex align-items-center justify-content-between rounded  model-div px-2 ">
        <div className="flex-grow-1  d-flex align-items-center">
          <span className={`material-symbols-outlined computer-logo-card`}>
            desktop_windows
          </span>
          <p className="my-1 " style={{ color: "white" }}>
            {props.model || "HP g6 600"}
          </p>
        </div>
        <div
          className={`d-flex justify-content-center align-items-center
             px-2 status-badge-${props.status} border rounded-pill `}
        >
          <span
            className={`material-symbols-outlined computer-logo-card circle-status me-1`}
          >
            circle
          </span>

          <p className="m-0" style={{ color: "white" }}>
            {props.status}
          </p>
        </div>
      </div>
      <div className="px-3 pt-1 ">
        <div className="d-flex justify-content-between">
          <div className=" d-flex">
            <span className="material-symbols-outlined card_info_icon">
              sell
            </span>
            <p>Asset Code: </p>
          </div>
          <div>
            <p>{props.assetCode}</p>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className=" d-flex">
            <span className="material-symbols-outlined card_info_icon">
              person
            </span>
            <p>Employee Name : </p>
          </div>
          <div>
            <p>{udateEmployeeName(props.employeeName)}</p>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className=" d-flex">
            <span className="material-symbols-outlined card_info_icon ">
              apartment
            </span>
            <p>Branch : </p>
          </div>
          <div>
            <p>{updateBranch(props.branchName)}</p>
          </div>
        </div>
      </div>
      <hr className="m-0    " />
      <div className="px-3 pt-1">
        <div className="d-flex justify-content-between">
          <div className=" d-flex">
            <span className="material-symbols-outlined card_info_icon ">
              memory
            </span>
            <p>CPU : </p>
          </div>
          <div>
            <p>{props.processor}</p>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className=" d-flex ">
            <span className="material-symbols-outlined card_info_icon">
              memory_alt
            </span>
            <p>RAM : </p>
          </div>
          <div>
            <p>{updateRam(props.ram)}</p>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <div className=" d-flex">
            <span className="material-symbols-outlined card_info_icon">
              hard_disk
            </span>
            <p>Storage : </p>
          </div>
          <div>
            <p>{updateStorage(props.ssd, props.hdd)}</p>
          </div>
        </div>
      </div>

      <button
        className="btn button-details d-flex justify-content-center align-items-center"
        type="button"
      >
        View Full Details
        <span className="material-symbols-outlined">arrow_right_alt</span>
      </button>
    </div>
  );
};
