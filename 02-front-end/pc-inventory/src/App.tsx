import "./App.css";
import { ComputerPage } from "./layout/computers/ComputerPage";

import { Header } from "./layout/header/Header";

import { SideBar } from "./layout/sideBar/SideBar";

function App() {
  return (
    <>
      <div className="d-flex">
        <SideBar />

        <div className="flex-fill ">
          <Header />

          <div className="container-fluid ">
            <ComputerPage />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
