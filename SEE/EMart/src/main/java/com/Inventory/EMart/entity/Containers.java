package com.inventory.emart.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "containers")
public class Containers {

    @Column(name = "ID")
    private String id;

    @Column(name = "P_con_code")
    private String[] p_con_code;
}
