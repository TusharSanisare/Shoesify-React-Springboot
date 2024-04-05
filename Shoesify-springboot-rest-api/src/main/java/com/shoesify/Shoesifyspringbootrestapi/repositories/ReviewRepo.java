package com.shoesify.Shoesifyspringbootrestapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shoesify.Shoesifyspringbootrestapi.models.Review;

@Repository
public interface ReviewRepo extends JpaRepository<Review, Integer> {

}
