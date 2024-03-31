package com.shoesify.Shoesifyspringbootrestapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shoesify.Shoesifyspringbootrestapi.models.Category;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Integer> {

}