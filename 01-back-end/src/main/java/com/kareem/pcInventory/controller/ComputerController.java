package com.kareem.pcInventory.controller;


import com.kareem.pcInventory.dto.response.ComputerResponse;
import com.kareem.pcInventory.dto.response.ComputerStatisticsResponse;
import com.kareem.pcInventory.dto.response.getAllData.GetComputerDetailData;
import com.kareem.pcInventory.enums.Status;
import com.kareem.pcInventory.service.ComputerService;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

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


    @GetMapping("/search/assetCode")
    public Page<ComputerResponse> getComputersByAssetCode(
            @RequestParam String assetCode,
            @RequestParam Integer pageNo,
            @RequestParam Integer pageSize){
        return computerService.getComputersByAssetCode(assetCode, pageNo, pageSize);
    }


    @GetMapping("/search/status")
    public Page<ComputerResponse> getComputersByStatus(
            @RequestParam Status status,
            @RequestParam Integer pageNo,
            @RequestParam Integer pageSize){
        return computerService.getComputersByStatus(status, pageNo, pageSize);
    }


    @GetMapping("/coreFilter")
    public Page<ComputerResponse> getComputersByCore(
            @RequestParam String coreFilter,
            @RequestParam Integer pageNo,
            @RequestParam Integer pageSize){
        return computerService.getComputerByFilterCore(coreFilter, pageNo, pageSize);
    }



@GetMapping("/{id}")
    public GetComputerDetailData  getComputerDetail(@PathVariable Long id){
       return  computerService.getComputerDetail(id);
}







}
