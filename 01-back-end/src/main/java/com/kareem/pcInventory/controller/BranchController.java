package com.kareem.pcInventory.controller;


import com.kareem.pcInventory.dto.response.BranchResponse;
import com.kareem.pcInventory.dto.response.BranchStatisticsResponse;
import com.kareem.pcInventory.service.BranchService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/branches")
public class BranchController {

    private final BranchService branchService;

    public BranchController(BranchService branchService) {
        this.branchService = branchService;
    }

    @GetMapping
    public List<BranchResponse> getBranches() {
        return branchService.getBranches();
    }

    @GetMapping("/info")
    public BranchStatisticsResponse getBranchInfo(){
        return branchService.getCount();
    }
}
