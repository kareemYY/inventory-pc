import { StatisticsCard } from "./StatisticsCard";
import "../ComputerPage.css";

export const Statistics = () => {
  return (
    <>
      <>
        {/* DESkTop  */}

        <div className=" d-none d-lg-flex justify-content-center  align-items-center gap-3 py-2">
          <div>
            <StatisticsCard
              device="card-statistics"
              icon="desktop_windows"
              value={153}
              title="Total PCs"
              description="All devices"
              iconClass="computer-icon"
            />
          </div>
          <div>
            <StatisticsCard
              device="card-statistics"
              icon="check_circle"
              value={131}
              title="Active"
              description="Working "
              iconClass="checkIcon"
            />
          </div>
          <div>
            <StatisticsCard
              device="card-statistics"
              icon="build"
              value={18}
              title="Maintenance"
              description="Needs Repair"
              iconClass="maintenanceIcon"
            />
          </div>

          <div>
            <StatisticsCard
              device="card-statistics"
              icon="cancel"
              value={4}
              title="Out of Service"
              description="Not Working"
              iconClass="out_of_serviceIcon"
            />
          </div>
          <div>
            <div>
              <button className="btn btn-primary d-flex btn-sm shadow-md align-items-center  px-3 add-fillter-button ">
                <span className="material-symbols-outlined fs-5">add</span>
                <span>Add Computer</span>
              </button>

              <button className="btn btn-light border btn-sm shadow-md d-flex align-items-center px-3 mt-2 .add-fillter-button">
                <span className="material-symbols-outlined fs-5">
                  filter_alt
                </span>
                <span>Filter Computers</span>
              </button>
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
            value={153}
            title="Total PCs"
            description="All devices"
            iconClass="computer-icon"
          />
        </div>
        <div>
          <StatisticsCard
            device="card-statistics-mobile"
            icon="check_circle"
            value={131}
            title="Active"
            description="Working "
            iconClass="checkIcon"
          />
        </div>
      </div>
      <div className=" d-lg-none d-flex justify-content-center  align-items-center gap-2 ">
        <div>
          <StatisticsCard
            device="card-statistics-mobile"
            icon="build"
            value={18}
            title="Maintenance"
            description="Needs Repair"
            iconClass="maintenanceIcon"
          />
        </div>

        <div>
          <StatisticsCard
            device="card-statistics-mobile"
            icon="x_circle"
            value={4}
            title="Out of service"
            description="Not working"
            iconClass="out_of_serviceIcon"
          />
        </div>
      </div>
      <div className=" d-lg-none d-flex justify-content-center  align-items-center gap-2 ">
        <button className="btn btn-primary d-flex btn-sm shadow-md align-items-center gap-2 px-3 m-1 .add-fillter-button">
          <span className="material-symbols-outlined fs-5">add</span>
          <span>Add Computer</span>
        </button>

        <button className="btn btn-light border btn-sm shadow-md d-flex align-items-center gap-2 px-3 m-1 .add-fillter-button">
          <span className="material-symbols-outlined fs-5">filter_alt</span>
          <span>Filter Computers</span>
        </button>
      </div>
    </>
  );
};
