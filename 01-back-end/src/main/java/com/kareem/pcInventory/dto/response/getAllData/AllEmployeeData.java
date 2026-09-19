package com.kareem.pcInventory.dto.response.getAllData;

import com.kareem.pcInventory.enums.Department;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AllEmployeeData {

    private Long EmployeeCode;

    private  String firstName;

    private String lastName;

    private String phone;

    private String jobTitle;

    private Department department;
}
