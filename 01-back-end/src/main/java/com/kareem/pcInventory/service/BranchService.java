package com.kareem.pcInventory.service;


import com.kareem.pcInventory.dto.response.BranchStatisticsResponse;
import com.kareem.pcInventory.dto.response.BranchResponse;
import com.kareem.pcInventory.entity.Branch;
import com.kareem.pcInventory.entity.Employee;
import com.kareem.pcInventory.mapping.BranchMapping;
import com.kareem.pcInventory.repository.BranchRepository;
import com.kareem.pcInventory.repository.ComputerRepository;
import com.kareem.pcInventory.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BranchService {

    BranchMapping  branchMapping;

    private final BranchRepository branchRepository;

    private final ComputerRepository computerRepository;

    private final EmployeeRepository employeeRepository;

    public BranchService(BranchRepository branchRepository,
                         ComputerRepository computerRepository,
                         EmployeeRepository employeeRepository) {
        this.branchRepository = branchRepository;
        this.computerRepository = computerRepository;
        this.employeeRepository = employeeRepository;
    }



    public List<BranchResponse> getBranches(){
        List<Branch>  branches = branchRepository.findAll();
        List<BranchResponse> branchResponses = new ArrayList<>();
        for(Branch branch:branches){
            BranchResponse branchResponse = new BranchResponse(branch.getBranchCode(),branch.getBranchName(),
                    branch.getGovernorate(),branch.getComputers().size());

            String employeesName="";
            for(Employee employee:branch.getEmployees()){
               employeesName=employeesName+
                       employee.getFirstName()+" "+employee.getLastName().substring(0,employee.getLastName().indexOf(' '))+" / ";

               branchResponse.setEmployees(employeesName);
            }
            if(employeesName.endsWith(" / ")){
                branchResponse.setEmployees(employeesName.substring(0,employeesName.length()-3));
            }

            branchResponses.add(branchResponse);
        }
return branchResponses;

    }

    public BranchStatisticsResponse getCount(){
        return new BranchStatisticsResponse(
                computerRepository.count(),
                branchRepository.count(),
                employeeRepository.count()
        );
    }
}
