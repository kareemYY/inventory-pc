package com.kareem.pcInventory.repository;

import com.kareem.pcInventory.entity.Branch;
import com.kareem.pcInventory.enums.Governorate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BranchRepository extends JpaRepository<Branch, Long> {


    List<Branch> findByBranchCodeContaining(String branchCode);

    Optional<Branch> findByBranchCode(Long branchCode);

    List<Branch> findByGovernorate(Governorate governorate);
}
