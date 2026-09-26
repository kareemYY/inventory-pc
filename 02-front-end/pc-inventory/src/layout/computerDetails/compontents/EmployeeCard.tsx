export const InformationCard = (props: {
  iconName: string;
  name: string;
  value: string;
}) => {
  return (
    <div className="  border rounded-3  d-flex p-2 m-1 bg-light rounded-3 shadow-sm">
      <i className={`bi bi-${props.iconName} me-2`}></i>
      {props.name} : {props.value}
    </div>
  );
};
