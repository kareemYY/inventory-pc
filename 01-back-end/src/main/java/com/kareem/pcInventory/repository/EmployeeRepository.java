package com.kareem.pcInventory.repository;

import com.kareem.pcInventory.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    Employee findByEmployeeCode(Long employeeCode);
}
