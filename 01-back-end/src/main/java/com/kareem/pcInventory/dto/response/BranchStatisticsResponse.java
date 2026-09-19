package com.kareem.pcInventory.dto.response;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class BranchStatisticsResponse {

    Long computerCount;
    Long branchCount;
    Long employeeCount;
}
