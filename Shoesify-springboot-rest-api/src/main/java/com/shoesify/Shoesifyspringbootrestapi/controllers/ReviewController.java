package com.shoesify.Shoesifyspringbootrestapi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.shoesify.Shoesifyspringbootrestapi.models.Review;
import com.shoesify.Shoesifyspringbootrestapi.services.ReviewService;

@Controller
public class ReviewController {

  @Autowired
  private ReviewService reviewService;

  @GetMapping("/review")
  public Review getReview(@RequestParam int id) {
    Review review = reviewService.getReviewbyId(id);
    if (review != null) {
      return review;
    } else {
      return review;
      // send error
    }
  }

  @PostMapping("/review")
  public int addReview(@RequestBody Review review) {
    int id = reviewService.saveReview(review);
    return id;
  }

  @PostMapping("/reviews")
  public int addReviews(@RequestBody List<Review> reviews) {
    int status = reviewService.saveReviewList(reviews);
    return status;
  }

  @GetMapping("/reviews")
  public List<Review> getReviews() {
    List<Review> reviewList = reviewService.getReviewList();
    return reviewList;
  }

}
