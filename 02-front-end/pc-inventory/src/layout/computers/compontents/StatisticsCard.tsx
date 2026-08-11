export const StatisticsCard = (props: {
  device: string;
  icon: string;
  value: number;
  title: string;
  description: string;
  iconClass?: string;
}) => {
  return (
    <div className={` card shadow px-1 mb-2 ${props.device}`}>
      <div className="d-flex align-items-center gap-3 ">
        <div>
          <span
            className={`material-symbols-outlined ${props.iconClass || "logo-icon"} stats-icon `}
          >
            {props.icon || ""}
          </span>
        </div>
        <div className="  flex-grow-1">
          <p className="mb-0 " style={{ fontWeight: "bold" }}>
            {props.title}
          </p>
          <h3 className=" mb-1 ps-2 ">{props.value}</h3>
        </div>
      </div>
    </div>
  );
};
