package com.kareem.pcInventory.dto.response;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ComputerStatisticsResponse {

    int totalComputers;
    int activeComputers;
    int maintenanceComputers;
    int outOfStockComputers;



}
