package com.kareem.pcInventory.service;

import com.kareem.pcInventory.dto.response.ComputerResponse;
import com.kareem.pcInventory.mapping.ComputerMapping;
import com.kareem.pcInventory.repository.ComputerRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ComputerService {

    private final ComputerMapping computerMapping=new ComputerMapping();

    private final ComputerRepository computerRepository;

    public ComputerService(ComputerRepository computerRepository) {
        this.computerRepository = computerRepository;
    }


    @Transactional(readOnly = true)
    public Page<ComputerResponse> getAllComputers(int pageNo , int pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);


        return computerRepository.findAll(pageable).map(computerMapping::mapComputersToComputerResponse);

    }
}
