package com.kareem.pcInventory.service;

import com.kareem.pcInventory.entity.Employee;
import com.kareem.pcInventory.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
public class EmployeeService {
    private EmployeeRepository employeeRepository;


    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }


    @Transactional(readOnly = true)
    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }



}
