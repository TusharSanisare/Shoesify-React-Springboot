package com.shoesify.Shoesifyspringbootrestapi.services;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.shoesify.Shoesifyspringbootrestapi.models.Review;
import com.shoesify.Shoesifyspringbootrestapi.repositories.ReviewRepo;

@Component
public class ReviewService {

  @Autowired
  private ReviewRepo reviewRepo;

  public int saveReviewList(List<Review> reviews) {
    Iterator<Review> reviewList = reviews.iterator();
    while (reviewList.hasNext()) {
      reviewRepo.save(reviewList.next());
    }
    return 1;
  }

  public int saveReview(Review review) {
    Review temp = reviewRepo.save(review);
    return temp.getReview_id();
  }

  public List<Review> getReviewList() {
    List<Review> reviewList = reviewRepo.findAll();
    return reviewList;
  }

  public Review getReviewbyId(int id) {
    Optional<Review> review = reviewRepo.findById(id);
    if (review != null) {
      return review.get();
    } else {
      return null;
    }
  }
}
