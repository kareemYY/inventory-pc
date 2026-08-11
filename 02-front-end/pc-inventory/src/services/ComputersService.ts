import type { ComputerModel } from "../models/ComputerModel";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
interface ComputerResponse {
  content: ComputerModel[];
  page: {
    totalPages: number;
    totalElements: number;
  };
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
};
