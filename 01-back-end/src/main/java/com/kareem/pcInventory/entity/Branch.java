package com.kareem.pcInventory.entity;


import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "branch")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Branch {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "branch_id")
    private Long id;

    @Column(name = "branch_code",  unique = true, nullable = false)
    private Long branchCode;


    @Column(name = "branch_name")
    private String branchName;

    @OneToMany(mappedBy = "branch", fetch = FetchType.LAZY,cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    private List<Computer> computers;

}
