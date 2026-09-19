package com.kareem.pcInventory.controller;


import com.kareem.pcInventory.dto.response.ComputerStatisticsResponse;
import com.kareem.pcInventory.service.ComputerInfoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/api/info")
public class ComputerInfoController {

    private final ComputerInfoService computerInfoService;

    public ComputerInfoController(ComputerInfoService computerInfoService) {
        this.computerInfoService = computerInfoService;
    }

    @GetMapping("/statistics")
    public ComputerStatisticsResponse getComputerStatistics(){
        return computerInfoService.getComputerStatistics();
    }

    @GetMapping("/filterByCore")
    public Set<String> getFilterByCore(){
        return computerInfoService.getProcessorsList();
    }



}
