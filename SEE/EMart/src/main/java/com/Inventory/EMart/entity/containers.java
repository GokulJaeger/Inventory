package com.Inventory.EMart.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="IDBT_C010_ID")
public class containers {
    private static final String ORDER_ID = "order_id";
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "p_id")
    private int pid;

    @Column(name = "c_no")
    private int cno;

    @Column(name = "c_id")
    private String cid;

    @Column(name = "c_quantity")
    @ManyToOne()
    @JoinColumn(name = ORDER_ID)
    private float cquantity;
}
