package com.shoesify.Shoesifyspringbootrestapi.models;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Category {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int category_id;

  private String category_name;
  private String category_image;

  @OneToMany
  private List<Product> products;

  public Category() {

  }

  public Category(String category_name, String category_image, List<Product> products) {
    this.category_name = category_name;
    this.category_image = category_image;
    this.products = products;
  }

  @Override
  public String toString() {
    return "Category [category_id=" + category_id + ", category_name=" + category_name + ", category_image="
        + category_image + ", products=" + products + "]";
  }

  public String getCategory_image() {
    return category_image;
  }

  public void setCategory_image(String category_image) {
    this.category_image = category_image;
  }

  public int getCategory_id() {
    return category_id;
  }

  public void setCategory_id(int category_id) {
    this.category_id = category_id;
  }

  public String getCategory_name() {
    return category_name;
  }

  public void setCategory_name(String category_name) {
    this.category_name = category_name;
  }

  public List<Product> getProducts() {
    return products;
  }

  public void setProducts(List<Product> products) {
    this.products = products;
  }

}
