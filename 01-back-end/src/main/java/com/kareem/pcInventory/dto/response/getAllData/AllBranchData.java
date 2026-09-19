package com.kareem.pcInventory.dto.response.getAllData;

import com.kareem.pcInventory.enums.Governorate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AllBranchData {

    private Long branchCode;

    private String branchName;

    private Governorate governorate;
}
