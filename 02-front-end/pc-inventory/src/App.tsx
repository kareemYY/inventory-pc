import "./App.css";
import { BranchPage } from "./layout/branches/BranchPage";
import { ComputerDetail } from "./layout/computers/computerDetails/ComputerDetail";

import { ComputerPage } from "./layout/computers/ComputerPage";

import { Header } from "./layout/header/Header";

import { SideBar } from "./layout/sideBar/SideBar";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <div className="d-flex">
        <SideBar />

        <AddComputer />
      </div> */}
      <div className="d-flex">
        <SideBar />

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
