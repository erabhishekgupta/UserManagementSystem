package com.usermanagementsystem.repository;


import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.usermanagementsystem.entity.User;


@Repository
public interface UserRepository extends JpaRepository<User , UUID> {

//	boolean existsById(UUID id);
//
//	Optional<User> findById(UUID id);

}
