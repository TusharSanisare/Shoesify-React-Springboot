package com.shoesify.Shoesifyspringbootrestapi.models;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity
@Data
public class Category {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int category_id;

  private String category_name;
  private String category_image;

  @OneToMany
  private List<Product> products;

}
