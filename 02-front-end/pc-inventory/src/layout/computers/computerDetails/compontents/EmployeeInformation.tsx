import type { AllEmployeeDetail } from "../../../../models/getAllDetails/AllEmployeeDetail";
import { InformationCard } from "./EmployeeCard";

export const EmployeeInformation = (props: {
  allEmployeeDetail: AllEmployeeDetail | undefined;
}) => {
  return (
    <div className="p-2  pb-2 bg-light rounded-3   ">
      <div
        className="d-flex  align-items-center  rounded-3 p-2"
        style={{ backgroundColor: "var(--more-light)" }}
      >
        <span className="material-symbols-outlined me-2 ">person</span>

        <h4 className="mb-0">User Information</h4>
      </div>

      <div className="d-flex flex-column ">
        <InformationCard
          iconName="person-vcard"
          name="Name"
          value={`${props.allEmployeeDetail?.firstName || ""} ${props.allEmployeeDetail?.lastName || "no data"}`}
        />
        <InformationCard
          iconName="whatsapp"
          name="Phone"
          value={props.allEmployeeDetail?.phone || "...."}
        />
        <InformationCard
          iconName="hash"
          name="Code"
          value={props.allEmployeeDetail?.EmployeeCode || "0"}
        />

        <InformationCard
          iconName="briefcase"
          name=" Job Title"
          value={props.allEmployeeDetail?.jobTitle || ""}
        />
        <InformationCard
          iconName="buildings"
          name=" Department"
          value={props.allEmployeeDetail?.department || ""}
        />
      </div>
    </div>
  );
};
