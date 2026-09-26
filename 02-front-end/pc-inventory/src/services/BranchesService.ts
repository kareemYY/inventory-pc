import type { BranchModel } from "../models/BranchModel";
import type { StatisticsBranchPage } from "../models/StatisticsBranchPage";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const BranchesService = {
  async getBranches(): Promise<BranchModel[]> {
    const response = await fetch(`${BASE_URL}/branches`);
    if (!response.ok) {
      throw new Error("Failed to fetch branches");
    }
    const branches = await response.json();
    return branches as BranchModel[];
  },

  async getBranchesStatisticsInfo(): Promise<StatisticsBranchPage> {
    const response = await fetch(`${BASE_URL}/branches/info`);
    if (!response.ok) {
      throw new Error("Failed to fetch branches");
    }
    const branchesInfo = await response.json();
    return branchesInfo as StatisticsBranchPage;
  },

  async getBranchesByCode(branchCode: string): Promise<BranchModel[]> {
    const response = await fetch(
      `${BASE_URL}/branches/search?branchCode=${branchCode}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch branches");
    }
    const branches = await response.json();
    return branches as BranchModel[];
  },

  async getBranchesByGovernorate(governorate: string): Promise<BranchModel[]> {
    const response = await fetch(
      `${BASE_URL}/branches/governorate?governorateName=${governorate}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch branches");
    }
    const branches = await response.json();
    return branches as BranchModel[];
  },
};
