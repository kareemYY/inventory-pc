import { useEffect, useState } from "react";
import "../ComputerPage.css";
import { ComputerInformation } from "./compontents/ComputerInformation";
import { EmployeeInformation } from "./compontents/EmployeeInformation";
import { LogsComputers } from "./compontents/LogsComputer";
import { MainInformation } from "./compontents/MainInformation";
import type { AllComputerDetails } from "../../../models/getAllDetails/AllComputerDetail";
import type { AllEmployeeDetail } from "../../../models/getAllDetails/AllEmployeeDetail";
import type { AllBranchDetail } from "../../../models/getAllDetails/AllBranchDetail";
import { ComputersService } from "../../../services/ComputersService";
import { SpinnerLoading } from "../../../utils/SpinnerLoading";
export const ComputerDetail = () => {
  const [computer, setComputer] = useState<AllComputerDetails>();
  const [employee, setEmployee] = useState<AllEmployeeDetail>();
  const [branch, setBranch] = useState<AllBranchDetail>();

  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string | null>(null);

  const computerId = window.location.pathname.split("/")[2];

  useEffect(() => {
    const computerDetail = async () => {
      try {
        let data = await ComputersService.getAllComputerDetail(computerId);
        setComputer(data.computer);
        setEmployee(data.employee);
        setBranch(data.branch);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError(
          error instanceof Error ? error.message : "an error has occurd",
        );
      }
    };
    computerDetail();
  }, []);
  if (isLoading) {
    return <SpinnerLoading />;
  }
  if (httpError) {
    return <div>{httpError}</div>;
  }

  return (
    <div className=" page_back_ground p-3">
      <MainInformation allBranchDetail={branch} allComputerDetails={computer} />
      <div
        className=" d-flex justify-content-center gap-5  align-items-center information_area "
        style={{ overflow: "hidden" }}
      >
        <div className="col-5">
          {" "}
          <ComputerInformation allComputerDetail={computer} />
        </div>
        <div className="col-5">
          <EmployeeInformation allEmployeeDetail={employee} />
        </div>
      </div>
      <div
        className="mt-2 bg-light border rounded-3 shadow-sm"
        style={{ height: "30vh", overflow: "hidden" }}
      >
        <LogsComputers present={false} />
      </div>
    </div>
  );
};
