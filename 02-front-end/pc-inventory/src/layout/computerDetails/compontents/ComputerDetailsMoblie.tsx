import type { AllBranchDetail } from "../../../models/getAllDetails/AllBranchDetail";
import type { AllComputerDetails } from "../../../models/getAllDetails/AllComputerDetail";
import type { AllEmployeeDetail } from "../../../models/getAllDetails/AllEmployeeDetail";
import optiplex2dwlmk2 from "../../../assets/2dwlmk2.png";
import prodesk2NZ55EC from "../../../assets/2NZ55EC.png";
import elitedesk4DP54Ut from "../../../assets/4DP54Ut.png";
import prodesk5VP65US from "../../../assets/5VP65US.png";
import prodesk8HS01UC from "../../../assets/8HS01UC.png";
import prodeskC8T90AV from "../../../assets/C8T90AV.webp";
import vostro29FSH3 from "../../../assets/H29FSH3.avif";
import esprimoM14W from "../../../assets/M14W.webp";
import generic from "../../../assets/generic.png";
import { Link } from "react-router-dom";

export const ComputerDetailsMobile = (props: {
  allComputerDetails: AllComputerDetails | undefined;
  allBranchDetail: AllBranchDetail | undefined;
  allEmployeeDetails: AllEmployeeDetail | undefined;
}) => {
  let img = "";

  const imageName =
    `${props.allComputerDetails?.model?.split(" ")[0] ?? ""}${props.allComputerDetails?.productNumber ?? ""}`.toLowerCase();

  if (imageName === "optiplex2dwlmk2") {
    img = optiplex2dwlmk2;
  } else if (imageName === "prodesk2nz55ec") {
    img = prodesk2NZ55EC;
  } else if (imageName === "elitedesk4dp54ut") {
    img = elitedesk4DP54Ut;
  } else if (imageName === "prodesk5vp65us") {
    img = prodesk5VP65US;
  } else if (imageName === "prodesk8hs01uc") {
    img = prodesk8HS01UC;
  } else if (imageName === "prodeskc8t90av") {
    img = prodeskC8T90AV;
  } else if (imageName === "vostro29fsh3") {
    img = vostro29FSH3;
  } else if (imageName === "esprimom14w") {
    img = esprimoM14W;
  }
  return (
    <>
      <div className="d-flex justify-content-center ">
        <img
          className="rounded img-thumbnail "
          src={img || generic}
          width={80}
          height={120}
        ></img>
      </div>
      <table className="table table-bordered border-primary mt-2">
        <thead>
          <tr className="table-success">
            <th scope="col">#</th>
            <th scope="col">description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Brand & Model</th>
            <td>
              {props.allComputerDetails?.brand == "GENERIC"
                ? "GENERIC"
                : `${props.allComputerDetails?.brand} ${props.allComputerDetails?.model}`}
            </td>
          </tr>
          <tr>
            <th scope="row">Asset Code</th>
            <td>
              PN :{props.allComputerDetails?.productNumber || "No Product "}
            </td>
          </tr>
          <tr>
            <th scope="row">Product Num</th>
            <td>{props.allComputerDetails?.productNumber}</td>
          </tr>
          <tr>
            <th scope="row">Branch code</th>
            <td>{String(props.allBranchDetail?.branchCode ?? "")}</td>
          </tr>
          <tr>
            <th scope="row">Branch place</th>
            <td>{props.allBranchDetail?.branchName}</td>
          </tr>
          <tr>
            <th scope="row">Governerate</th>
            <td>{props.allBranchDetail?.governorate}</td>
          </tr>
          <tr>
            <th scope="row">CPU</th>
            <td>{props.allComputerDetails?.cpuFullName} </td>
          </tr>
          <tr>
            <th scope="row">RAM</th>
            <td>
              <span className="text-muted">
                {props.allComputerDetails?.ramGeneration}
                {"  "}
              </span>
              <span className="fw-bold">
                {" "}
                {props.allComputerDetails?.ramSize}GB
              </span>
              <span className="text-muted fst-italic">
                {" "}
                @{props.allComputerDetails?.ramSpeed}
                {"  "}
              </span>
            </td>
          </tr>
          <tr>
            <th scope="row">Storage</th>
            <td>
              {` ${
                props.allComputerDetails?.ssdType === "NVME"
                  ? `NVME : ${props.allComputerDetails?.ssd}`
                  : props.allComputerDetails?.ssdType === "SSD"
                    ? `SSD : ${props.allComputerDetails?.ssd}`
                    : props.allComputerDetails?.ssd
              }
            ,${props.allComputerDetails?.hdd ? ` HDD : ${props.allComputerDetails.hdd}` : ""} `}
            </td>
          </tr>
          <tr>
            <th scope="row" colSpan={2} className="text-center table-success">
              Employee Information
            </th>
          </tr>
          <tr>
            <th scope="row">Name</th>
            <td>{`${props.allEmployeeDetails?.firstName} ${props.allEmployeeDetails?.lastName}`}</td>
          </tr>
          <tr>
            <th scope="row">Phone</th>
            <td>{props.allEmployeeDetails?.phone}</td>
          </tr>
          <tr>
            <th scope="row">Code</th>
            <td>{props.allEmployeeDetails?.EmployeeCode}</td>
          </tr>
          <tr>
            <th scope="row">Job title</th>
            <td>{props.allEmployeeDetails?.jobTitle}</td>
          </tr>
          <tr>
            <th scope="row">DepartMent</th>
            <td>{props.allEmployeeDetails?.department}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link
          to={`/computers/${props.allComputerDetails?.id}/logs`}
          className="btn button-details   d-flex justify-content-center align-items-center gap-2"
          type="button"
        >
          Logs
        </Link>
      </div>
    </>
  );
};
