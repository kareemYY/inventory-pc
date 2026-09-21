import type { ComputerModel } from "../models/ComputerModel";
import type { AllBranchDetail } from "../models/getAllDetails/AllBranchDetail";
import type { AllComputerDetails } from "../models/getAllDetails/AllComputerDetail";
import type { AllEmployeeDetail } from "../models/getAllDetails/AllEmployeeDetail";
import type { StatisticsInfo } from "../models/StatisticsInfo";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
interface ComputerResponse {
  content: ComputerModel[];
  page: {
    totalPages: number;
    totalElements: number;
  };
}

interface ComputerDetail {
  computer: AllComputerDetails;
  employee: AllEmployeeDetail;
  branch: AllBranchDetail;
}

export const ComputersService = {
  async getComputers(
    pageNo: number,
    pageSize: number,
  ): Promise<ComputerResponse> {
    const response = await fetch(
      `${BASE_URL}/computers?page=${pageNo}&size=${pageSize}`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch computers");
    }

    return await response.json();
  },

  async getComputerByAssetCode(
    assetCode: string,
    pageNo: number,
    pageSize: number,
  ): Promise<ComputerResponse> {
    const response = await fetch(
      `${BASE_URL}/computers/search/assetCode?assetCode=${assetCode}&pageNo=${pageNo}&pageSize=${pageSize}`,
    );
    if (!response.ok) {
      throw "Can't find Computers";
    }

    return response.json();
  },

  async getComputerByStatus(
    status: string,
    pageNo: number,
    pageSize: number,
  ): Promise<ComputerResponse> {
    const response = await fetch(
      `${BASE_URL}/computers/search/status?status=${status}&pageNo=${pageNo}&pageSize=${pageSize}`,
    );
    if (!response.ok) {
      throw "Can't find Computers";
    }

    return response.json();
  },

  async getComputerStatistics(): Promise<StatisticsInfo> {
    const response = await fetch(`${BASE_URL}/info/statistics`);
    if (!response.ok) {
      throw "Can't find Computers";
    }

    return response.json();
  },

  async getFilterByCore(): Promise<[string]> {
    const response = await fetch(`${BASE_URL}/info/filterByCore`);
    if (!response.ok) {
      throw "Can't find info";
    }

    return response.json();
  },

  async getComputerByCore(
    processor: string,
    pageNo: number,
    pageSize: number,
  ): Promise<ComputerResponse> {
    const response = await fetch(
      `${BASE_URL}/computers/coreFilter?coreFilter=${processor}&pageNo=${pageNo}&pageSize=${pageSize}`,
    );
    if (!response.ok) {
      throw "Can't find Computers";
    }

    return response.json();
  },

  async getAllComputerDetail(computerId: string): Promise<ComputerDetail> {
    const response = await fetch(`${BASE_URL}/computers/${computerId}`);
    if (!response.ok) {
      throw "Can't find Computers";
    }

    return response.json();
  },
};
