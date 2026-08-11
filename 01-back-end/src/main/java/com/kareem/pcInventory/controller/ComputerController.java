package com.kareem.pcInventory.controller;


import com.kareem.pcInventory.dto.response.ComputerResponse;
import com.kareem.pcInventory.service.ComputerService;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/computers")
public class ComputerController {

    private final ComputerService computerService;

    public ComputerController(ComputerService computerService) {
        this.computerService = computerService;
    }

    @GetMapping()
    public Page<ComputerResponse> getComputers(@RequestParam Integer page, @RequestParam Integer size) {
return computerService.getAllComputers(page, size);
    }
}
