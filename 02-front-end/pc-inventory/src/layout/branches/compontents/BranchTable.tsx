import { useEffect, useState } from "react";
import type { BranchModel } from "../../../models/BranchModel";
import { BranchesService } from "../../../services/BranchesService";
import { SpinnerLoading } from "../../../utils/SpinnerLoading";

export const BranchTable = () => {
  const [Branches, setBranches] = useState<BranchModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComputers = async () => {
      try {
        let data = await BranchesService.getBranches();
        setBranches(data);
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
    <div className="table-scroll-container">
      <table className="table table-striped table-hover table-bordered">
        <thead className="table-dark gray">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Code</th>
            <th scope="col">Name</th>
            <th scope="col">User</th>
            <th scope="col">Governorate</th>
            <th scope="col">Area Manager</th>
            <th scope="col">Computers</th>
            <th scope="col">Printer</th>
          </tr>
        </thead>

        <tbody>
          {Branches.map((branch, index) => (
            <tr key={branch.branchCode}>
              <th scope="row">{index + 1}</th>
              <td>{branch.branchCode}</td>
              <td>{branch.branchName}</td>
              <td>{branch.employees}</td>
              <td>{branch.governorate}</td>
              <td>ali</td>
              <td>{branch.computers}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
