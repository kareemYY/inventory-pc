export interface AllComputerDetails {
  id: number;
  assetCode?: string | null;
  productNumber?: string | null;
  brand?: string | null;
  model?: string | null;
  cpuFullName?: string | null;
  cpuGeneration?: string | null;
  ramSize?: number | null;
  ramSpeed?: number | null;
  ramGeneration?: string | null;
  ssd?: number | null;
  ssdType?: string | null;
  hdd?: number | null;
  status?: string | null;
}
