export interface ComputerModel {
  id: number;
  model: string | null;
  status?: string;
  assetCode?: string;
  employeeName: string | null;
  branchName: string | null;
  processor: string;
  ram: number | null;
  ssd: number | null;
  hdd: number | null;
}
