package com.inventory.emart.repository;

import java.util.List;

import com.inventory.emart.entity.Warehouse;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface WarehouseRepo extends JpaRepository<Warehouse, Long> {

    @Query("select w from com.inventory.emart.entity.Warehouse w where w.P_id= :pid")
    Warehouse findWareID(String pid);

    public List<Warehouse> findAlList();
}
