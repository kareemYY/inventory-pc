import { useEffect, useState } from "react";
import type { ComputerModel } from "../../models/ComputerModel";
import { CardDetails } from "./compontents/CardDetails";
import { Statistics } from "./compontents/Statistics";
import { ComputersService } from "../../services/ComputersService";
import { SpinnerLoading } from "../../utils/SpinnerLoading";
import { Pagination } from "../../utils/Pagination";

export const ComputerPage = () => {
  const COMPUTER_PER_PAGE = 8;

  const [computers, setComputers] = useState<ComputerModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalComputer, setTotalComputer] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchComputers = async () => {
      try {
        const pageNo = currentPage - 1;
        const data = await ComputersService.getComputers(
          pageNo,
          COMPUTER_PER_PAGE,
        );
        setComputers(data.content);
        setTotalComputer(data.page.totalElements);
        setTotalPages(data.page.totalPages);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError(
          error instanceof Error ? error.message : "an error has occurd",
        );
      }
    };
    fetchComputers();
  }, [currentPage]);

  if (isLoading) {
    return <SpinnerLoading />;
  }
  if (httpError) {
    return <div>{httpError}</div>;
  }
  const indexOfFirstComputer = (currentPage - 1) * COMPUTER_PER_PAGE + 1;
  const lastComputerOfPage = Math.min(
    currentPage * COMPUTER_PER_PAGE,
    totalComputer,
  );

  return (
    <>
      <div className="pt-4 page_back_ground">
        <Statistics />
        <div className="  d-flex justify-content-center flex-wrap  align-items-center gap-3 ">
          {computers.map((computer) => (
            <div className="card-details " key={computer.id}>
              <CardDetails {...computer} />
            </div>
          ))}
        </div>
        <div className="mt-2 d-flex justify-content-between align-items-center">
          <div className="ms-3">
            {" "}
            <p>
              {" "}
              {indexOfFirstComputer} of {lastComputerOfPage} Computers
            </p>
          </div>
          <Pagination
            currentPage={currentPage}
            paginate={setCurrentPage}
            totalPages={totalPages}
          />
          <div className="me-3">
            <p>Total :{totalComputer} Computers</p>
          </div>
        </div>
      </div>
    </>
  );
};
