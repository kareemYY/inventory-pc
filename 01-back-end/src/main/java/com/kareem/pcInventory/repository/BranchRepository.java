package com.kareem.pcInventory.repository;

import com.kareem.pcInventory.entity.Branch;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BranchRepository extends JpaRepository<Branch, Long> {


    List<Branch> findByBranchNameContainingIgnoreCase(String name);

    Optional<Branch> findByBranchCode(Long branchCode);
}
