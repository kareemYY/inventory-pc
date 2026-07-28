package com.kareem.pcInventory.service;

import com.kareem.pcInventory.entity.Computer;
import com.kareem.pcInventory.repository.ComputerRepository;

import java.util.List;

public class ComputerService {

    private final ComputerRepository computerRepository;

    public ComputerService(ComputerRepository computerRepository) {
        this.computerRepository = computerRepository;
    }


    public List<Computer> findAll() {
        return computerRepository.findAll();
    }

    public Computer findById(Long id) {
        return computerRepository.findById(id)
                .orElseThrow(()->new RuntimeException("Computer not found"));
    }
}
