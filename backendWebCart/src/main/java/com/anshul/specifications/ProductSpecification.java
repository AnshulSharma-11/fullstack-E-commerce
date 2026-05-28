package com.anshul.specifications;

import org.springframework.data.jpa.domain.Specification;

import com.anshul.entities.Category;
import com.anshul.entities.Product;
import com.anshul.entities.SubCategory;

import jakarta.persistence.criteria.Join;

public class ProductSpecification 
{
	public static Specification<Product> hasCategory(String categoryName)
	{
		return (root , query , cd)->
		{
			if(categoryName==null || categoryName.isBlank())
			{
				return null;
			}
			else
			{
				Join<Product, SubCategory> productSubCateJoin=root.join("subCategory");
				Join<SubCategory, Category> productCateJoin=productSubCateJoin.join("category");
				return cd.equal(cd.lower(productCateJoin.get("name")), categoryName.toLowerCase());
			}
		};
	}
	
}
