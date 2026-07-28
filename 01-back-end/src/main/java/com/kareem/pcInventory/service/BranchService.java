package com.kareem.pcInventory.service;


import com.kareem.pcInventory.entity.Branch;
import com.kareem.pcInventory.repository.BranchRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BranchService {

    private final BranchRepository branchRepository;


    public BranchService(BranchRepository branchRepository) {
        this.branchRepository = branchRepository;
    }

    public Branch findById(Long id) {
        return branchRepository.findById(id).orElseThrow(
                ()->new RuntimeException("Branch not found"));
    }

    public List<Branch> findAll() {
        return branchRepository.findAll();
    }

    public Branch findByBranchCode(Long branchCode) {
        return branchRepository.findByBranchCode(branchCode).
                orElseThrow(()->new RuntimeException("Branch not found"));
    }

    public List<Branch> findByBranchNameContainingIgnoreCase(String name) {
        return branchRepository.findByBranchNameContainingIgnoreCase(name);
    }

    public void createNewBranch(Branch branch) {
        branchRepository.save(branch);
    }

    public void deleteBranch(Long branchCode) {
        Branch branch = branchRepository.findByBranchCode(branchCode).
                orElseThrow(()->new RuntimeException("Branch not found"));
        branchRepository.deleteById(branch.getId());
    }

}
