import type { AllComputerDetails } from "../../../../models/getAllDetails/AllComputerDetail";
import { ComputerCard } from "./ComputerCard";

export const ComputerInformation = (props: {
  allComputerDetail: AllComputerDetails | undefined;
}) => {
  return (
    <div className="p-2 bg-light rounded-3  ">
      <div
        className="d-flex  align-items-center  rounded-3 p-2"
        style={{ backgroundColor: "var(--more-light)" }}
      >
        <span className="material-symbols-outlined me-2 ">desktop_windows</span>

        <h4 className="mb-0">Computer Information</h4>
      </div>

      <div className="justify-content-center row gap-3  py-1 ">
        <ComputerCard
          iconName="cpu"
          name="CPU"
          value={props.allComputerDetail?.cpuFullName?.split("@")[0]}
        />

        <ComputerCard
          iconName="speedometer2"
          name="CPU Speed"
          value={props.allComputerDetail?.cpuFullName?.split("@")[1]}
        />
      </div>
      <div className=" justify-content-center row gap-3  py-1  ">
        <ComputerCard
          iconName="memory"
          name="RAM Size"
          value={`${props.allComputerDetail?.ramSize?.toString()}  GB`}
        />

        <ComputerCard
          iconName="speedometer2"
          name="RAM Speed"
          value={props.allComputerDetail?.ramSpeed?.toString()}
        />
      </div>

      <div className="justify-content-center row gap-3  py-1  ">
        {props.allComputerDetail?.ssdType == "NVME" && (
          <ComputerCard
            iconName="nvme"
            name="NVME Size"
            value={`${props.allComputerDetail?.ssd} GB`}
          />
        )}
        {props.allComputerDetail?.ssdType == "SSD" && (
          <ComputerCard
            iconName="device-ssd"
            name="SSD Size"
            value={`${props.allComputerDetail?.ssd} GB`}
          />
        )}

        <ComputerCard
          iconName="hdd"
          name="HDD Size"
          value={`${props.allComputerDetail?.hdd} GB`}
        />
      </div>
    </div>
  );
};
