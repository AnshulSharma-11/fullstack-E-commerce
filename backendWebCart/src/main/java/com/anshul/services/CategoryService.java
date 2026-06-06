package com.anshul.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.anshul.entities.Category;
import com.anshul.repositories.CategoryRepository;
import com.anshul.response_wrapper.ResponseWrapper;
import com.anshul.response_wrapper.UniversalResponse;

@Service
public class CategoryService 
{

		@Autowired
		CategoryRepository categoryRepository;
		
		@Autowired
		UniversalResponse response;
		
		public ResponseEntity<ResponseWrapper> addCategory(Category category)
		{
			Category savedCategory=categoryRepository.save(category);
			return response.send("Category Saved!", savedCategory, HttpStatus.OK);
			
		}
		public ResponseEntity<ResponseWrapper> getAllCategories()
		   {
			List<Category> categories=categoryRepository.findAll();
			return response.send("Following categoris found", categories, HttpStatus.FOUND);	
		    }


	
}
