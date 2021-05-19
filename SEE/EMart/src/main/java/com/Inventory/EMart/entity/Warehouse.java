package com.inventory.emart.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "warehouse")
public class Warehouse {

    @Column(name = "ID")
    private long ID;

    private String P_id;
    private String P_name;
    private String P_description;
    private double P_price;
    private int P_quantity;
    private String Stock_in;
    private String Stock_out;

    @Column(name = "P_Container")
    private String P_Container;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "container_list", joinColumns = {
            @JoinColumn(name = "P_Container", referencedColumnName = "ID") }, inverseJoinColumns = {
                    @JoinColumn(name = "ID", referencedColumnName = "ID") }, uniqueConstraints = @UniqueConstraint(columnNames = {
                            "P_Container", "role_id" }))
    private List<Containers> Container_List;

    private String Order_id;

    public long getID() {
        return ID;
    }

    public void setID(long iD) {
        ID = iD;
    }

    public String getP_id() {
        return P_id;
    }

    public void setP_id(String p_id) {
        P_id = p_id;
    }

    public String getP_name() {
        return P_name;
    }

    public void setP_name(String p_name) {
        P_name = p_name;
    }

    public String getP_description() {
        return P_description;
    }

    public void setP_description(String p_description) {
        P_description = p_description;
    }

    public double getP_price() {
        return P_price;
    }

    public void setP_price(double p_price) {
        P_price = p_price;
    }

    public int getP_quantity() {
        return P_quantity;
    }

    public void setP_quantity(int p_quantity) {
        P_quantity = p_quantity;
    }

    public String getStock_in() {
        return Stock_in;
    }

    public void setStock_in(String stock_in) {
        Stock_in = stock_in;
    }

    public String getStock_out() {
        return Stock_out;
    }

    public void setStock_out(String stock_out) {
        Stock_out = stock_out;
    }

    public String getP_Container() {
        return P_Container;
    }

    public void setP_Container(String p_Container) {
        P_Container = p_Container;
    }

    public List<Containers> getContainer_List() {
        return Container_List;
    }

    public void setContainer_List(List<Containers> container_List) {
        Container_List = container_List;
    }

    public String getOrder_id() {
        return Order_id;
    }

    public void setOrder_id(String order_id) {
        Order_id = order_id;
    }

}
