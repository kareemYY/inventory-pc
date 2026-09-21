import { BranchTable } from "./compontents/BranchTable";
import { SearchOfBranch } from "./compontents/SearchOfBranch";
import { StatisticsOfBranch } from "./compontents/StatisticsOfBranch";

export const BranchPage = () => {
  return (
    <div className="page_back_ground">
      <div style={{ maxHeight: "10vh" }}>
        <StatisticsOfBranch />
      </div>
      <div className="" style={{ maxHeight: "10vh" }}>
        <SearchOfBranch />
      </div>
      <div className=" m-3" style={{ height: "65vh" }}>
        <BranchTable />
      </div>
    </div>
  );
};
