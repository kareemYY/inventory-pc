import { useEffect, useState } from "react";
import type { ComputerModel } from "../../models/ComputerModel";
import { CardDetails } from "./compontents/CardDetails";
import { Statistics } from "./compontents/Statistics";
import { ComputersService } from "../../services/ComputersService";
import { SpinnerLoading } from "../../utils/SpinnerLoading";
import { Pagination } from "../../utils/Pagination";
import { useSearchParams } from "react-router-dom";

export const ComputerPage = () => {
  const COMPUTER_PER_PAGE = 8;

  const [computers, setComputers] = useState<ComputerModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalComputer, setTotalComputer] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [searchParams] = useSearchParams();
  const searchName = searchParams.get("search");
  const filterByCore = searchParams.get("core");
  const filterByStatus = searchParams.get("status");

  useEffect(() => {
    const fetchComputers = async () => {
      try {
        const pageNo = currentPage - 1;
        let data;
        if (searchName) {
          data = await ComputersService.getComputerByAssetCode(
            searchName,
            pageNo,
            COMPUTER_PER_PAGE,
          );
        } else if (filterByStatus === "out-of-service") {
          data = await ComputersService.getComputerByStatus(
            "OUT_OF_SERVICE",
            pageNo,
            COMPUTER_PER_PAGE,
          );
        } else if (filterByStatus === "total-pcs") {
          data = await ComputersService.getComputers(pageNo, COMPUTER_PER_PAGE);
        } else if (
          filterByStatus === "maintenance" ||
          filterByStatus === "active"
        ) {
          data = await ComputersService.getComputerByStatus(
            filterByStatus.toUpperCase(),
            pageNo,
            COMPUTER_PER_PAGE,
          );
        } else if (filterByCore) {
          data = await ComputersService.getComputerByCore(
            filterByCore,
            pageNo,
            COMPUTER_PER_PAGE,
          );
        } else {
          data = await ComputersService.getComputers(pageNo, COMPUTER_PER_PAGE);
        }

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
  }, [filterByStatus, filterByCore, searchName, currentPage]);

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
      <div className="p-3 page_back_ground   d-flex flex-column ">
        <Statistics />
        <main className="flex-grow-1">
          <div className="  d-flex  flex-wrap  align-items-center gap-3 ">
            {computers.map((computer) => (
              <div className="card-details " key={computer.id}>
                <CardDetails {...computer} />
              </div>
            ))}
          </div>
          {lastComputerOfPage === 0 && (
            <div className="d-flex justify-content-center  align-items-center  ">
              <h1 className=" text-center">No Computer Found</h1>
            </div>
          )}
        </main>
        {lastComputerOfPage > 0 && (
          <div className=" d-flex justify-content-between align-items-center mt-1">
            <div className="ms-3">
              {" "}
              <p>
                {" "}
                {indexOfFirstComputer} of {lastComputerOfPage} Computers
              </p>
            </div>
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                paginate={setCurrentPage}
                totalPages={totalPages}
              />
            )}
            <div className="me-3">
              <p>Total :{totalComputer} Computers</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
