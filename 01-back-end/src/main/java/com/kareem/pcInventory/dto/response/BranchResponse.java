package com.kareem.pcInventory.dto.response;

import com.kareem.pcInventory.enums.Governorate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BranchResponse {


    private Long branchCode;



    private String branchName;


    private Governorate governorate;


    private int computers;


    private String  employees;

    public BranchResponse(Long branchCode, String branchName, Governorate governorate, int computers) {
        this.branchCode = branchCode;
        this.branchName = branchName;
        this.governorate = governorate;
        this.computers = computers;
    }
}
