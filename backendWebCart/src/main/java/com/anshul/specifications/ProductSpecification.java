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
		return (root , query , cb)->
		{
			if(categoryName==null || categoryName.isBlank())
			{
				return null;
			}
			else
			{
				Join<Product, SubCategory> productSubCateJoin=root.join("subCategory");
				Join<SubCategory, Category> productCateJoin=productSubCateJoin.join("category");
				return cb.equal(cb.lower(productCateJoin.get("name")), categoryName.toLowerCase());
			}
		};
	}
	public static Specification<Product> hasSubCategory(String subCategoryName)
	{
		return (root , query , cb)->
		{
			if(subCategoryName==null || subCategoryName.isBlank())
			{
				return null;
			}
			else
			{
				Join<Product, SubCategory> productSubCateJoin=root.join("subCategory");
				//Join<SubCategory, Category> productCateJoin=productSubCateJoin.join("category");
				return cb.equal(cb.lower(productSubCateJoin.get("name")), subCategoryName.toLowerCase());
			}
		};
	}

	public static Specification<Product> sortByPrice(String sortDirection)
	{
		return (root , query , cb)->
		{
			if(sortDirection==null || sortDirection.isBlank())
			{
				return null;
			}
			if(sortDirection.equalsIgnoreCase("asc"))
			{
				query.orderBy(cb.asc(root.get("price")));
			}
			else
			{
				query.orderBy(cb.desc(root.get("price")));
			}
			return null;
		};
	}
}
