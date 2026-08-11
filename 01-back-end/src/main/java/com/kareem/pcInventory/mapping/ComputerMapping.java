package com.kareem.pcInventory.mapping;

import com.kareem.pcInventory.dto.response.ComputerResponse;
import com.kareem.pcInventory.entity.Computer;

public class ComputerMapping {



    public ComputerResponse mapComputersToComputerResponse(Computer computer){
        ComputerResponse computerResponse = new ComputerResponse();
        computerResponse.setId(computer.getId());
        computerResponse.setModel(computer.getModel());
        computerResponse.setStatus(computer.getStatus());
        computerResponse.setAssetCode(computer.getAssetCode());
        computerResponse.setProcessor(computer.getProcessor());
      computerResponse.setRam(computer.getRam());
      computerResponse.setSsd(computer.getSsd());
      computerResponse.setHdd(computer.getHdd());
      computerResponse.setEmployeeName(computer.getEmployeeName()==null?"no Employee":computer.getEmployeeName());
      computerResponse.setBranchName(computer.getBranch()==null?"No Branch" :computer.getBranch().getBranchName());

return  computerResponse;
    }
}
