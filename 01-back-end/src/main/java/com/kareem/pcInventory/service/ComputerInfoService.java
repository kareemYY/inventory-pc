package com.kareem.pcInventory.service;


import com.kareem.pcInventory.dto.response.ComputerStatisticsResponse;
import com.kareem.pcInventory.entity.Computer;
import com.kareem.pcInventory.enums.Status;
import com.kareem.pcInventory.mapping.BranchMapping;
import com.kareem.pcInventory.mapping.ComputerMapping;
import com.kareem.pcInventory.repository.BranchRepository;
import com.kareem.pcInventory.repository.ComputerRepository;
import com.kareem.pcInventory.repository.EmployeeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;
import java.util.TreeSet;

@Service
public class ComputerInfoService {


    private final ComputerMapping computerMapping=new ComputerMapping();

    private final ComputerRepository computerRepository;

    public ComputerInfoService(ComputerRepository computerRepository) {
        this.computerRepository = computerRepository;
    }

    @Transactional(readOnly = true)
    public ComputerStatisticsResponse getComputerStatistics(){
        return new  ComputerStatisticsResponse(
                (int) computerRepository.count(),
                computerRepository.countByStatus(Status.ACTIVE),
                computerRepository.countByStatus(Status.MAINTENANCE),
                computerRepository.countByStatus(Status.OUT_OF_SERVICE)
        );
    }

    @Transactional(readOnly = true)
    public Set<String> getProcessorsList(){
        List<Computer> computers =computerRepository.findAll();
        Set<String> listOfCoreAndGen= new TreeSet<>();
        for(Computer computer : computers) {
                listOfCoreAndGen.add(computer.getCpuFullName().substring(0,computer.getCpuFullName().indexOf('@')));
        }
        return listOfCoreAndGen;
    }

}
