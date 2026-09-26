import { Link, useSearchParams } from "react-router-dom";

export const SearchOfBranch = () => {
  const [searchParams] = useSearchParams();
  const governorate = searchParams.get("governorate");
  const governrates: string[] = [
    "CAIRO",
    "GIZA",
    "ALEXANDRIA",
    "QALYUBIA",
    "DAKAHLIA",
    "SHARQIA",
    "GHARBIA",
    "MONUFIA",
    "BEHEIRA",
    "KAFR_EL_SHEIKH",
    "DAMIETTA",
    "PORT_SAID",
    "ISMAILIA",
    "SUEZ",
    "NORTH_SINAI",
    "SOUTH_SINAI",
    "FAYOUM",
    "BENI_SUEF",
    "MINYA",
    "ASSIUT",
    "SOHAG",
    "QENA",
    "LUXOR",
    "ASWAN",
    "RED_SEA",
    "NEW_VALLEY",
    "MATROUH",
  ];

  return (
    <div className="d-flex align-items-center justify-content-center ">
      <div className="  d-flex align-items-center justify-content-center gap-3 back_ground_search m-2 py-2 px-4 rounded shadow-md">
        <div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {governorate || "governorate"}
            </button>
            <ul className="dropdown-menu dropdown-menu">
              {governrates.map((governrate, index) => (
                <li key={index}>
                  <Link
                    className="dropdown-item"
                    to={`/branches?governorate=${governrate}`}
                  >
                    {governrate}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Area Manager
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <Link
            to={"/branches"}
            className="btn btn-outline-secondary d-flex btn-md shadow-md align-items-center px-3"
          >
            <span className="material-symbols-outlined fs-5">restart_alt</span>
            <span>Reset</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
