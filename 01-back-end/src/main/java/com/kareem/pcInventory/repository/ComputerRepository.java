package com.kareem.pcInventory.repository;

import com.kareem.pcInventory.entity.Computer;
import com.kareem.pcInventory.enums.Status;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComputerRepository extends JpaRepository<Computer, Long> {


    Page<Computer>  findByAssetCodeContaining(String assetCode, Pageable pageable);


    Page<Computer>  findByStatus(Status status, Pageable pageable);

    Integer countByStatus(Status status);


//    List<Computer> findByCpuFullName();

    Page<Computer>  findByCpuFullNameContaining(String processor, Pageable pageable);
}
