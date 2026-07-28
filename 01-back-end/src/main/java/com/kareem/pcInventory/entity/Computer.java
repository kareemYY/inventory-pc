package com.kareem.pcInventory.entity;


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

    @Column(name = "model")
    private String model;

    @Column(name = "processor")
    private String processor;

    @Column(name = "ram")
    private Integer ram;

    @Column(name = "ssd")
    private Integer ssd;

    @Column(name = "hdd")
    private Integer hdd;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Status status;

    @Column(name = "employee_name")
    private String employeeName;

    @Column(name = "notes")
    private String notes;


    @ManyToOne( fetch = FetchType.LAZY,cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "branch_id")
    private Branch branch;

}
