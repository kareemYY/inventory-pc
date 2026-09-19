package com.kareem.pcInventory.dto.response.getAllData;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GetComputerDetailData {

private AllComputerData computer;
private AllEmployeeData employee;
private AllBranchData branch;

}
