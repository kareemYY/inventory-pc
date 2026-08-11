package com.kareem.pcInventory.dto.response;

import com.kareem.pcInventory.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ComputerResponse {

    private long id;

    private String model;

    private Status status;

    private String assetCode;

    private String employeeName;

    private String branchName;

    private String processor;

    private Integer  ram;

    private Integer ssd;

private Integer hdd;


}
