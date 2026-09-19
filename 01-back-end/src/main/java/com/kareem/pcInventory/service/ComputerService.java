package com.kareem.pcInventory.service;

import com.kareem.pcInventory.dto.response.ComputerResponse;
import com.kareem.pcInventory.dto.response.ComputerStatisticsResponse;
import com.kareem.pcInventory.dto.response.getAllData.AllBranchData;
import com.kareem.pcInventory.dto.response.getAllData.AllComputerData;
import com.kareem.pcInventory.dto.response.getAllData.AllEmployeeData;
import com.kareem.pcInventory.dto.response.getAllData.GetComputerDetailData;
import com.kareem.pcInventory.entity.Computer;
import com.kareem.pcInventory.entity.Employee;
import com.kareem.pcInventory.enums.Status;
import com.kareem.pcInventory.mapping.BranchMapping;
import com.kareem.pcInventory.mapping.ComputerMapping;
import com.kareem.pcInventory.mapping.EmployeeMapping;
import com.kareem.pcInventory.repository.BranchRepository;
import com.kareem.pcInventory.repository.ComputerRepository;
import com.kareem.pcInventory.repository.EmployeeRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ComputerService {

    private final ComputerMapping computerMapping=new ComputerMapping();
    private final BranchMapping branchMapping=new BranchMapping();
    private final EmployeeMapping employeeMapping=new EmployeeMapping();

    private final ComputerRepository computerRepository;
    private final EmployeeRepository employeeRepository;
    private final BranchRepository branchRepository;


    public ComputerService(ComputerRepository computerRepository,
                           EmployeeRepository employeeRepository,
                           BranchRepository branchRepository) {
        this.computerRepository = computerRepository;
        this.employeeRepository = employeeRepository;
        this.branchRepository = branchRepository;
    }

    @Transactional(readOnly = true)
    public Page<ComputerResponse> getAllComputers(int pageNo , int pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        List<Employee> employees= employeeRepository.findAll();
       return computerRepository.
               findAll(pageable).map(computer -> computerMapping.mapComputersToComputerResponse(computer,employees));
    }


    @Transactional(readOnly = true)
    public Page<ComputerResponse> getComputersByAssetCode(String assetCode,int pageNo , int pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        List<Employee> employees= employeeRepository.findAll();
        return computerRepository.findByAssetCodeContaining(assetCode,pageable).map(computer -> computerMapping.mapComputersToComputerResponse(computer,employees));
    }


    @Transactional(readOnly = true)
    public Page<ComputerResponse> getComputersByStatus(Status status, int pageNo , int pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        List<Employee> employees= employeeRepository.findAll();
        return computerRepository.findByStatus(status,pageable).map(computer -> computerMapping.mapComputersToComputerResponse(computer,employees));
    }


    @Transactional(readOnly = true)
    public Page<ComputerResponse> getComputerByFilterCore(String coreFilter, int pageNo , int pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        List<Employee> employees= employeeRepository.findAll();
        return computerRepository.findByCpuFullNameContaining(coreFilter,pageable).
                map(computer -> computerMapping.mapComputersToComputerResponse(computer,employees));
    }



    @Transactional(readOnly = true)
    public GetComputerDetailData getComputerDetail(Long  computerId) {
        Optional<Computer> computer = computerRepository.findById(computerId);
        GetComputerDetailData getComputerDetailData = new GetComputerDetailData();

        if (computer.isPresent()) {
            getComputerDetailData.setComputer(computerMapping.mapAllComputersToAllComputerData(computer.get()));
            getComputerDetailData.setBranch(branchMapping.mapAllBranchToAllBranchData(computer.get().getBranch()));

            if (computer.get().getEmployeeCode() != 0) {
                getComputerDetailData.setEmployee(employeeMapping.
                        getAllEmployeeData(employeeRepository.findByEmployeeCode(computer.get().getEmployeeCode())));
                return getComputerDetailData;
            }

        }
        return getComputerDetailData;
    }











}
