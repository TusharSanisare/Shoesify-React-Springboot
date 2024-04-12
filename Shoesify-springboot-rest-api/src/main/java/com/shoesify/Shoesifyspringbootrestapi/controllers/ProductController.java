package com.shoesify.Shoesifyspringbootrestapi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.shoesify.Shoesifyspringbootrestapi.models.Product;
import com.shoesify.Shoesifyspringbootrestapi.services.ProductService;

@RestController
public class ProductController {

  @Autowired
  private ProductService productService;

  @GetMapping("/product") // localhost:8080/product?id=7
  public Product getProduct(@RequestParam int id) {
    Product product = productService.getProductbyId(id);
    if (product != null) {
      return product;
    } else {
      return product;
      // send error
    }
  }

  @PostMapping("/product")
  public int addProduct(@RequestBody Product product) {
    int id = productService.saveProduct(product);
    return id;
  }

  @PostMapping("/products")
  public int addProducts(@RequestBody List<Product> products) {
    int status = productService.saveProductList(products);
    return status;
  }

  @GetMapping("/products")
  public List<Product> getProducts() {
    List<Product> productList = productService.getProductList();
    return productList;
  }

  @GetMapping("/products/category") // localhost:8080/products/category?id=7
  public List<Product> getProductByCategoryId(@RequestParam int id) {
    List<Product> productList = productService.getProductByCategoryId(id);
    return productList;
  }

}
