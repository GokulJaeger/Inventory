package com.inventory.emart.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

public class Supplier {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private long id;

    @Column(name = "s_id")
    private String sid;

    @Column(name = "s_name")
    private String sname;

    @Column(name = "s_phone")
    private long sphone;

    @Column(name = "s_email")
    private String semail;

    @Column(name = "s_address")
    private String saddr;

    public Supplier(long id, String sid, String sname, long sphone, String semail, String saddr) {
        this.id = id;
        this.sid = sid;
        this.sname = sname;
        this.sphone = sphone;
        this.semail = semail;
        this.saddr = saddr;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getSid() {
        return sid;
    }

    public void setSid(String sid) {
        this.sid = sid;
    }

    public String getSname() {
        return sname;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    public long getSphone() {
        return sphone;
    }

    public void setSphone(long sphone) {
        this.sphone = sphone;
    }

    public String getSemail() {
        return semail;
    }

    public void setSemail(String semail) {
        this.semail = semail;
    }

    public String getSaddr() {
        return saddr;
    }

    public void setSaddr(String saddr) {
        this.saddr = saddr;
    }

    @Override
    public String toString() {
        return "Supplier [id=" + id + ", saddr=" + saddr + ", semail=" + semail + ", sid=" + sid + ", sname=" + sname
                + ", sphone=" + sphone + "]";
    }

}