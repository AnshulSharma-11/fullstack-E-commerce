package com.anshul.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.anshul.entities.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long>{

}
