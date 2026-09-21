import optiplex2dwlmk2 from "../../../../assets/2dwlmk2.png";
import prodesk2NZ55EC from "../../../../assets/2NZ55EC.png";
import elitedesk4DP54Ut from "../../../../assets/4DP54Ut.webp";
import prodesk5VP65US from "../../../../assets/5VP65US.png";
import prodesk8HS01UC from "../../../../assets/8HS01UC.png";
import prodeskC8T90AV from "../../../../assets/C8T90AV.webp";
import vostro29FSH3 from "../../../../assets/H29FSH3.avif";
import esprimoM14W from "../../../../assets/M14W.webp";
import generic from "../../../../assets/generic.jpg";
import type { AllBranchDetail } from "../../../../models/getAllDetails/AllBranchDetail";
import type { AllComputerDetails } from "../../../../models/getAllDetails/AllComputerDetail";

export const MainInformation = (props: {
  allComputerDetails: AllComputerDetails | undefined;
  allBranchDetail: AllBranchDetail | undefined;
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
    <div className="  d-flex justify-content-between px-5 align-items-center main_computer_details bg-light  ">
      <div className="d-flex align-items-center">
        <div className="flex-shrink-0">
          <img src={img || generic} width={80} height={120}></img>
        </div>
        <div className="ms-2 pt-2  d-flex flex-column ">
          <div>
            {props.allComputerDetails?.brand == "GENERIC" ? (
              <h3> GENERIC </h3>
            ) : (
              <h3>
                {`${props.allComputerDetails?.brand} ${props.allComputerDetails?.model}`}{" "}
              </h3>
            )}
          </div>

          <div>
            <h5 className="text-muted  ">
              PN :{props.allComputerDetails?.productNumber || "No Product "}
            </h5>
          </div>
          <div>
            {props.allComputerDetails?.assetCode && (
              <h4 className=" ">
                <span className="material-symbols-outlined ">shoppingmode</span>
                {`  TW_PC_${props.allComputerDetails?.assetCode}`}
              </h4>
            )}
          </div>
        </div>
      </div>
      <div className="d-flex flex-column px-4">
        <div className="pb-2">
          {" "}
          <i className="bi bi-hash me-2"></i>
          <span>
            Branch Code:{" "}
            <span className="fw-bold">
              {" "}
              {String(props.allBranchDetail?.branchCode ?? "")}
            </span>
          </span>
        </div>
        <div className="pb-2">
          {" "}
          <i className="bi bi-geo-alt-fill me-2"></i>
          <span>
            Branch Place:
            <span className="fw-bold">
              {" "}
              {props.allBranchDetail?.branchName}
            </span>
          </span>
        </div>
        <div>
          {" "}
          <i className="bi bi-geo-fill me-2"></i>
          <span>
            Governerate:{" "}
            <span className="fw-bold">
              {" "}
              {props.allBranchDetail?.governorate}
            </span>
          </span>
        </div>
      </div>
      <div className="back_ground_working">
        <i className="ms-2 bi bi-heart-pulse text-success fs-4"></i>
        <span className="fs-4"> Working Good</span>
      </div>
    </div>
  );
};
