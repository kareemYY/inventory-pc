package com.kareem.pcInventory.dto.response.getAllData;


import com.kareem.pcInventory.enums.Brand;
import com.kareem.pcInventory.enums.RamGeneration;
import com.kareem.pcInventory.enums.SsdType;
import com.kareem.pcInventory.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AllComputerData {


        private Long id;

        private String assetCode;

        private String productNumber;

        private Brand brand;

        private String model;

        private String cpuFullName;

        private String cpuGeneration;

        private Integer ramSize;

        private Integer ramSpeed;

        private RamGeneration ramGeneration;

        private Integer ssd;

        private SsdType ssdType;

        private Integer hdd;

        private Status status;






}
