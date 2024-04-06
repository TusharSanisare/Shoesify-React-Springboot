package com.shoesify.Shoesifyspringbootrestapi.services;

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

  public Product getProductbyId(int id) {
    Optional<Product> product = productRepo.findById(id);
    if (product != null) {
      return product.get();
    } else {
      return null;
    }
  }
}
