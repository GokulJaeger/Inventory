package com.inventory.emart.repository;

import java.util.List;
import com.inventory.emart.entity.DAOUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<com.inventory.emart.entity.DAOUser, Long> {
    DAOUser findByUsername(String username);

	public List<DAOUser> findAll();
}
