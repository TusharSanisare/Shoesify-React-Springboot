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
  private int id;

  private String productId;
  private String category;
  private int category_id;
  private String name;
  private String description;
  private double price;
  private String gender;
  private String color;
  private String size;
  private String material;
  private String soleMaterial;
  private String insoleMaterial;
  private String heelHeight;
  private String weight;
  private List<String> imageUrls;
  private String stock;
  private double rating;
  private int totalSold;
  private int totalPieces;
  private String releaseDate;
  private List<String> tags;

}
