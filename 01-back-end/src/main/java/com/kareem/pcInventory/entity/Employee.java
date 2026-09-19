package com.kareem.pcInventory.entity;


import com.kareem.pcInventory.enums.Department;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "employee")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Employee {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "employee_code")
    private Long employeeCode;

    @Column(name = "first_name")
    private  String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "phone")
    private String phone;

    @Column(name = "job_title")
    private String jobTitle;

    @Column(name = "department")
    @Enumerated(EnumType.STRING)
    private Department department;


    @ManyToOne( fetch = FetchType.LAZY,cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "branch_code")
    private Branch branch;
}
