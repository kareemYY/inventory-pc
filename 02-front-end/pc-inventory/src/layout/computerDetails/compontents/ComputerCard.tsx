export const ComputerCard = (props: {
  iconName: string | undefined;
  name: string | undefined;
  value: React.ReactNode | undefined;
}) => {
  return (
    <div className=" p-1 border rounded-3  col-6  card-infomation shadow-sm">
      <div className="info-item d-flex align-items-center">
        <div className=" pe-3">
          <i className={`fs-4 bi bi-${props.iconName}`}></i>
        </div>

        <div>
          <h6 className="m-0">{props.name}</h6>
          <span>{props.value}</span>
        </div>
      </div>
    </div>
  );
};
