import { StatisticsCard } from "./StatisticsCard";
import "../ComputerPage.css";
import { useEffect, useState } from "react";
import type { StatisticsInfo } from "../../../models/StatisticsInfo";
import { ComputersService } from "../../../services/ComputersService";
import { Link } from "react-router-dom";

export const Statistics = () => {
  const [statisticsInfo, setStatisticsInfo] = useState<StatisticsInfo>();
  const [filterByCore, setFilterByCore] = useState<[string]>();

  useEffect(() => {
    const fetchComputers = async () => {
      try {
        const data = await ComputersService.getComputerStatistics();
        const filterCore = await ComputersService.getFilterByCore();
        setStatisticsInfo(data);
        setFilterByCore(filterCore);
      } catch (error) {}
    };
    fetchComputers();
  }, []);

  const coreFilters: string[] = [];
  filterByCore?.map((filterAdd) => {
    coreFilters.push(filterAdd);
  });

  return (
    <>
      <>
        {/* DESkTop  */}

        <div className=" d-none d-lg-flex justify-content-center  align-items-center gap-3 py-1">
          <div>
            <StatisticsCard
              device="card-statistics"
              icon="desktop_windows"
              value={statisticsInfo ? statisticsInfo.totalComputers : 0}
              title="Total PCs"
              iconClass="computer-icon"
            />
          </div>
          <div>
            <StatisticsCard
              device="card-statistics"
              icon="check_circle"
              value={statisticsInfo ? statisticsInfo.activeComputers : 0}
              title="Active"
              iconClass="checkIcon"
            />
          </div>
          <div>
            <StatisticsCard
              device="card-statistics"
              icon="build"
              value={statisticsInfo ? statisticsInfo.maintenanceComputers : 0}
              title="Maintenance"
              iconClass="maintenanceIcon"
            />
          </div>

          <div>
            <StatisticsCard
              device="card-statistics"
              icon="cancel"
              value={statisticsInfo ? statisticsInfo.outOfStockComputers : 0}
              title="Out of service"
              iconClass="out_of_serviceIcon"
            />
          </div>
          <div>
            <div>
              <button className="btn btn-primary d-flex btn-sm shadow-md align-items-center  px-3 add-fillter-button ">
                <span className="material-symbols-outlined fs-5">add</span>
                <span>Add Computer</span>
              </button>

              <button
                className="btn btn-light border btn-sm shadow-md d-flex align-items-center px-3 mt-2 add-fillter-button dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>Filter by processor</span>
              </button>
              <ul className="dropdown-menu">
                {coreFilters.map((filter) => (
                  <li key={filter}>
                    <Link
                      className="dropdown-item"
                      to={`/computers?core=${filter}`}
                    >
                      {filter}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
      {/*Mobile*/}

      <div className=" d-lg-none d-flex justify-content-center  align-items-center gap-2 ">
        <div>
          <StatisticsCard
            device="card-statistics-mobile"
            icon="desktop_windows"
            value={statisticsInfo ? statisticsInfo.totalComputers : 0}
            title="Total PCs"
            iconClass="computer-icon"
          />
        </div>
        <div>
          <StatisticsCard
            device="card-statistics-mobile"
            icon="check_circle"
            value={statisticsInfo ? statisticsInfo.activeComputers : 0}
            title="Active"
            iconClass="checkIcon"
          />
        </div>
      </div>
      <div className=" d-lg-none d-flex justify-content-center  align-items-center gap-2 ">
        <div>
          <StatisticsCard
            device="card-statistics-mobile"
            icon="build"
            value={statisticsInfo ? statisticsInfo.maintenanceComputers : 0}
            title="Maintenance"
            iconClass="maintenanceIcon"
          />
        </div>

        <div>
          <StatisticsCard
            device="card-statistics-mobile"
            icon="x_circle"
            value={statisticsInfo ? statisticsInfo.outOfStockComputers : 0}
            title="Out of service"
            iconClass="out_of_serviceIcon"
          />
        </div>
      </div>
      <div className=" d-lg-none d-flex justify-content-center  align-items-center gap-2 ">
        <button className="btn btn-primary d-flex btn-sm shadow-md align-items-center gap-2 px-3 m-1 .add-fillter-button">
          <span className="material-symbols-outlined fs-5">add</span>
          <span>Add Computer</span>
        </button>

        <button
          className="btn btn-light border btn-sm shadow-md d-flex align-items-center px-3 mt-2 add-fillter-button dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span>Filter by processor</span>
        </button>
        <ul className="dropdown-menu">
          {coreFilters.map((filter) => (
            <li key={filter}>
              <Link className="dropdown-item" to={`/computers?core=${filter}`}>
                {filter}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
