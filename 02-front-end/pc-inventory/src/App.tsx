import "./App.css";
import { BranchPage } from "./layout/branches/BranchPage";
import { ComputerDetail } from "./layout/computerDetails/ComputerDetail";

import { ComputerPage } from "./layout/computers/ComputerPage";

import { Header } from "./layout/header/Header";

import { SideBar } from "./layout/sideBar/SideBar";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="d-flex">
        <div className="d-none d-lg-flex">
          <SideBar />
        </div>
        <div
          className="offcanvas offcanvas-start"
          tabIndex={-1}
          id="sidebar"
          aria-labelledby="offcanvasExampleLabel"
          style={{ width: "250px" }}
        >
          <div className="offcanvas-body p-0" style={{ width: "250px" }}>
            <SideBar />
          </div>
        </div>
        <div className="flex-fill  ">
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="/computers" replace />} />
              <Route path="/computers" element={<ComputerPage />}></Route>
              <Route
                path="/computers/:assetCode"
                element={<ComputerDetail />}
              ></Route>
              <Route path="/branches" element={<BranchPage />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
