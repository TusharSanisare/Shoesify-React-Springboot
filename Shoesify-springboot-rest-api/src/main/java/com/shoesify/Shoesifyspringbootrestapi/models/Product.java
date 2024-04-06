package com.shoesify.Shoesifyspringbootrestapi.models;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Product {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int productId;

  private String category;
  private int category_id;
  private String name;
  private String description;
  private int price;
  private int offer;
  private String gender;
  private List<String> color;
  private List<String> imageUrls;
  private List<String> tags;
  private List<Integer> size;
  private String material;
  private String soleMaterial;
  private String insoleMaterial;
  private String weight;
  private float rating;
  private int stock;

}
