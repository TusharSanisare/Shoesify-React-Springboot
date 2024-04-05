package com.shoesify.Shoesifyspringbootrestapi.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Review {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int review_id;

  private String user;
  private double rated;
  private String comment;
  private int product_id;
}
