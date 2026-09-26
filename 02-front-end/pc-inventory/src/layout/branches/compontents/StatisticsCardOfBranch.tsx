export const StatisticsCardOfBranch = (props: {
  device: string;
  icon: string;
  value: number;
  title: string;
  iconClass?: string;
}) => {
  return (
    <div className={` card shadow px-1 mb-2 ${props.device} `}>
      <div className=" d-flex align-items-center ">
        <div>
          <span className={` material-symbols-outlined  card-props `}>
            {props.icon || ""}
          </span>
        </div>
        <div className="  flex-grow-1 ms-4">
          <p className=" m-0 ms-2 p-0" style={{ fontWeight: "bold" }}>
            {props.title}
          </p>
          <h3 className=" mb-1 ps-2 ">{props.value}</h3>
        </div>
      </div>
    </div>
  );
};
