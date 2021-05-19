package com.inventory.emart.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinTable;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "vendor_det")
public class Vendor {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "v_id")
    private long id;

    private String v_id;
    private String name;
    private String address;
    private String email;

    @Column(name = "s_id")
    private String s_id;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(name = "s_id")
    private List<Vendor> vendor;

    public Vendor(long id, String v_id, String name, String address, String email, String s_id, List<Vendor> vendor) {
        this.id = id;
        this.v_id = v_id;
        this.name = name;
        this.address = address;
        this.email = email;
        this.s_id = s_id;
        this.vendor = vendor;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getV_id() {
        return v_id;
    }

    public void setV_id(String v_id) {
        this.v_id = v_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getS_id() {
        return s_id;
    }

    public void setS_id(String s_id) {
        this.s_id = s_id;
    }

    public List<Vendor> getVendor() {
        return vendor;
    }

    public void setVendor(List<Vendor> vendor) {
        this.vendor = vendor;
    }

    @Override
    public String toString() {
        return "Vendor [address=" + address + ", email=" + email + ", id=" + id + ", name=" + name + ", s_id=" + s_id
                + ", v_id=" + v_id + ", vendor=" + vendor + "]";
    }

}
