package com.anshul.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.anshul.entities.Product;
import com.anshul.entities.Vendor;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> , JpaSpecificationExecutor<Product>
{

	List<Product> findAllByVendor(Vendor vendor);

	Optional<Product> findByVendorAndId(Vendor vendor, Long id);
}
