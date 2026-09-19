package com.kareem.pcInventory.mapping;

import com.kareem.pcInventory.dto.response.BranchResponse;
import com.kareem.pcInventory.dto.response.getAllData.AllBranchData;
import com.kareem.pcInventory.entity.Branch;

public class BranchMapping {

    public BranchResponse mapBranchToBranchTest(Branch branch){
        BranchResponse branchResponse = new BranchResponse();
        branchResponse.setBranchCode(branch.getBranchCode());
        branchResponse.setBranchName(branch.getBranchName());
        branchResponse.setGovernorate(branch.getGovernorate());
        branchResponse.setComputers(branch.getComputers().size());
        return branchResponse;
    }
    public AllBranchData mapAllBranchToAllBranchData(Branch branch){
        AllBranchData allBranchData = new AllBranchData();
        allBranchData.setBranchCode(branch.getBranchCode());
        allBranchData.setBranchName(branch.getBranchName());
        allBranchData.setGovernorate(branch.getGovernorate());
        return allBranchData;
    }
}
