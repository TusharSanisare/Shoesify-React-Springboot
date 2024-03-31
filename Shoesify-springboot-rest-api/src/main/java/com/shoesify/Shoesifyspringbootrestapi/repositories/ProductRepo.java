package com.shoesify.Shoesifyspringbootrestapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shoesify.Shoesifyspringbootrestapi.models.Product;

public interface ProductRepo extends JpaRepository<Product, Integer> {

}
