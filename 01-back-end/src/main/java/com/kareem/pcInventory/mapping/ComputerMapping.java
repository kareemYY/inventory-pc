package com.kareem.pcInventory.mapping;

import com.kareem.pcInventory.dto.response.ComputerResponse;
import com.kareem.pcInventory.dto.response.getAllData.AllComputerData;
import com.kareem.pcInventory.entity.Computer;
import com.kareem.pcInventory.entity.Employee;

import java.util.List;

public class ComputerMapping {



    public ComputerResponse mapComputersToComputerResponse(Computer computer, List<Employee> employees){
        ComputerResponse computerResponse = new ComputerResponse();
        computerResponse.setId(computer.getId());
        computerResponse.setModel(computer.getModel());
        computerResponse.setStatus(computer.getStatus());
        computerResponse.setAssetCode(computer.getAssetCode());
        computerResponse.setProcessor(computer.getCpuFullName());
      computerResponse.setRam(computer.getRamSize());
      computerResponse.setSsd(computer.getSsd());
      computerResponse.setHdd(computer.getHdd());
      computerResponse.setBranchName(computer.getBranch()==null?"No Branch" :computer.getBranch().getBranchName());
      for (Employee employee : employees) {
          if (employee.getEmployeeCode().equals(computer.getEmployeeCode())){
              computerResponse.setEmployeeName(employee.getFirstName()+" "+employee.getLastName().substring(0,employee.getLastName().indexOf(" ")));
          }
      }

return  computerResponse;
    }

    public AllComputerData  mapAllComputersToAllComputerData(Computer computer){
        AllComputerData allComputerData = new AllComputerData();
        allComputerData.setId(computer.getId());
        allComputerData.setAssetCode(computer.getAssetCode());
        allComputerData.setProductNumber(computer.getProductNumber());
        allComputerData.setBrand(computer.getBrand());
        allComputerData.setModel(computer.getModel());
        allComputerData.setCpuFullName(computer.getCpuFullName());
        allComputerData.setCpuGeneration(computer.getCpuGeneration());
        allComputerData.setRamSize(computer.getRamSize());
        allComputerData.setRamSpeed(computer.getRamSpeed());
        allComputerData.setRamGeneration(computer.getRamGeneration());
        allComputerData.setSsd(computer.getSsd());
        allComputerData.setSsdType(computer.getSsdType());
        allComputerData.setHdd(computer.getHdd());
        allComputerData.setStatus(computer.getStatus());
        return allComputerData;
    }
}
