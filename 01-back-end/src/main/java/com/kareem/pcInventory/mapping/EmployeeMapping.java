package com.kareem.pcInventory.mapping;

import com.kareem.pcInventory.dto.response.getAllData.AllEmployeeData;
import com.kareem.pcInventory.entity.Employee;

public class EmployeeMapping {

    public AllEmployeeData getAllEmployeeData(Employee employee) {
        AllEmployeeData allEmployeeData = new AllEmployeeData();
        allEmployeeData.setEmployeeCode(employee.getEmployeeCode());
        allEmployeeData.setFirstName(employee.getFirstName());
        allEmployeeData.setLastName(employee.getLastName());
        allEmployeeData.setPhone(employee.getPhone());
        allEmployeeData.setJobTitle(employee.getJobTitle());
        allEmployeeData.setDepartment(employee.getDepartment());
        return allEmployeeData;
    }
}
