package com.anshul.entities;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Data
public class Category {

		@Id
		private long id;
		
		@Column(nullable = false)
		@Size(min = 3, max=10, message = "Category name must be between 3 to 10 characters")
		private String name;
	
		
		@OneToMany(mappedBy = "category")
		//@JsonBackReference
			List<SubCategory> subCategories;
		

}
