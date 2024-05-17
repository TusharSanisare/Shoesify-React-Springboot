package com.shoesify.Shoesifyspringbootrestapi.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.shoesify.Shoesifyspringbootrestapi.models.Product;
import com.shoesify.Shoesifyspringbootrestapi.repositories.ProductRepo;

@Component
public class ProductService {

  @Autowired
  private ProductRepo productRepo;

  public int saveProductList(List<Product> products) {
    Iterator<Product> productList = products.iterator();
    while (productList.hasNext()) {
      productRepo.save(productList.next());
    }
    return 1;
  }

  public int saveProduct(Product product) {
    Product temp = productRepo.save(product);
    return temp.getProductId();
  }

  public List<Product> getProductList() {
    List<Product> productList = productRepo.findAll();
    return productList;
  }

  public List<Product> getLatestProductList() {
    List<Product> productList = productRepo.findAll();
    List<Product> latestProducts = new ArrayList<>();

    // Iterate through the products and add only the first 4
    int count = 0;
    for (Product product : productList) {
      latestProducts.add(product);
      count++;
      if (count >= 4) {
        break;
      }
    }
    return latestProducts;
  }

  public Product getProductbyId(int id) {
    Optional<Product> product = productRepo.findById(id);
    if (product != null) {
      return product.get();
    } else {
      return null;
    }
  }

  public List<Product> getProductByCategoryId(int category_id) {
    List<Product> products = productRepo.getProductsByCategoryId(category_id);

    if (products != null) {
      return products;
    } else {
      System.out.println("ProductService : Error -> List is NULL");
      return null;
    }
  }
}
