package com.kareem.pcInventory.entity;


import com.kareem.pcInventory.enums.Brand;
import com.kareem.pcInventory.enums.RamGeneration;
import com.kareem.pcInventory.enums.SsdType;
import com.kareem.pcInventory.enums.Status;
import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "computer")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Computer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "computer_id")
    private Long id;

    @Column(name = "asset_code",unique = true)
    private String assetCode;

    @Column(name = "product_number")
    private String productNumber;

    @Enumerated(EnumType.STRING)
    @Column(name = "brand")
    private Brand brand;

    @Column(name = "model")
    private String model;

    @Column(name = "cpu")
    private String cpuFullName;

    @Column(name = "cpu_generation")
    private String cpuGeneration;

    @Column(name = "ram_size")
    private Integer ramSize;

    @Column(name = "ram_speed")
    private Integer ramSpeed;

    @Column(name = "ram_generation")
    @Enumerated(EnumType.STRING)
    private RamGeneration ramGeneration;

    @Column(name = "ssd")
    private Integer ssd;

    @Enumerated(EnumType.STRING)
    @Column(name = "ssd_type")
    private SsdType ssdType;

    @Column(name = "hdd")
    private Integer hdd;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Status status;

    @Column(name = "employee_code")
    private Long employeeCode;

    @ManyToOne( fetch = FetchType.LAZY,cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "branch_code")
    private Branch branch;

}
