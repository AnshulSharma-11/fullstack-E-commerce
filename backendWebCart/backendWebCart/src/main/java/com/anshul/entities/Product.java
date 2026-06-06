
package com.anshul.entities;


import java.time.Instant;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Data
@EntityListeners(AuditingEntityListener.class)
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(nullable = false)
	@Size(min = 3, max = 20, message = "product name must be between 3 to 20 characters")
	private String name;
	
	@Column(nullable = false)
	private String description;
	
	@Min(value = 99, message = "min price is 99")
	@Max(value = 1000, message = "max price is 1000")
	@Column(nullable = false)
	private double price;
	
	@Column(nullable = false)
	private int quantity;
	
	@Column(nullable = false)
	private String brand;
	
	@Column(nullable = false)
	private String imageName;
	
	@ManyToOne
	@JoinColumn(name = "sub_category_id")
	private SubCategory subCategory;
	
	@ManyToOne
	@JoinColumn(name = "vendor_id")
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private Vendor vendor;
	
	@CreatedDate
	private Instant createdAt;
	
	@LastModifiedDate
	private Instant updatedAt;
	

}