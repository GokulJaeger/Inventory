package com.Inventory.EMart.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
@Table(name = "IDBT_101_ID")
public class vegetables {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "p_id")
    private String pid;

    @Column(name = "p_name")
    private String pname;

    @Column(name = "p_descriiption")
    private String pdescription;

    @Column(name = "p_price")
    private float pprice;

    @Column(name = "p_quantity")
    private float pquantity;
    
    @Column(name = "stock_in")
    @Temporal(TemporalType.DATE)
    private Date Stockin;

    @Column(name = "stock_out")
    private Date Stockout;

    @Column(name = "containers")
    private int containers;

    @Column(name = "container_list")
    private List<containers> containerlist;

    @Column(name = "order_id")
    private String orderid;
}
