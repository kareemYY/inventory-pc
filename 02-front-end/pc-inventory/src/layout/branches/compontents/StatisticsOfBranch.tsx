import { StatisticsCardOfBranch } from "./StatisticsCardOfBranch";
import "../BranchPage.css";
import type { StatisticsBranchPage } from "../../../models/StatisticsBranchPage";
import { useEffect, useState } from "react";
import { BranchesService } from "../../../services/BranchesService";
import { SpinnerLoading } from "../../../utils/SpinnerLoading";

export const StatisticsOfBranch = () => {
  const [branchesInfo, setBranchesInfo] = useState<StatisticsBranchPage | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComputers = async () => {
      try {
        let data = await BranchesService.getBranchesStatisticsInfo();
        setBranchesInfo(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError(
          error instanceof Error ? error.message : "An error has occurred",
        );
      }
    };

    fetchComputers();
  }, []);
  if (isLoading) {
    return <SpinnerLoading />;
  }
  if (httpError) {
    return <div>{httpError}</div>;
  }

  return (
    <>
      <>
        {/* DESkTop  */}

        <div className=" d-none d-lg-flex justify-content-center  align-items-center gap-3 py-2">
          <div>
            <StatisticsCardOfBranch
              device="card-statistics-branch"
              icon="warehouse"
              title="Branches"
              value={branchesInfo?.branchCount || 0}
              iconClass="branch-icon"
            />
          </div>
          <div>
            <StatisticsCardOfBranch
              device="card-statistics-branch"
              icon="desktop_windows"
              title="Computers"
              value={branchesInfo?.computerCount || 0}
              iconClass="branch-icon"
            />
          </div>
          <div>
            <StatisticsCardOfBranch
              device="card-statistics-branch"
              icon="print"
              title="Printers"
              value={0}
              iconClass="branch-icon"
            />
          </div>

          <div>
            <StatisticsCardOfBranch
              device="card-statistics-branch"
              icon="person"
              title="Users"
              value={branchesInfo?.employeeCount || 0}
              iconClass="branch-icon"
            />
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </>
    </>
  );
};
