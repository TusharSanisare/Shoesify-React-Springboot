package com.shoesify.Shoesifyspringbootrestapi.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.shoesify.Shoesifyspringbootrestapi.models.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, Integer> {

  @Query("SELECT p FROM Product p WHERE p.categoryId=?1")
  List<Product> getProductsByCategoryId(int categoryId);
}
