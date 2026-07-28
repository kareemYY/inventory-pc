package com.kareem.pcInventory.repository;

import com.kareem.pcInventory.entity.Branch;
import com.kareem.pcInventory.entity.Computer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComputerRepository extends JpaRepository<Computer, Long> {
}
