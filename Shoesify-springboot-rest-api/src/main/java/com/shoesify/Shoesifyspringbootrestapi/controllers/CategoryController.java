package com.shoesify.Shoesifyspringbootrestapi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.shoesify.Shoesifyspringbootrestapi.models.Category;
import com.shoesify.Shoesifyspringbootrestapi.services.CategoryService;

@RestController
public class CategoryController {
  @Autowired
  private CategoryService cateroryService;

  @GetMapping("/category")
  public Category getCategory(@RequestParam int id) {
    Category category = cateroryService.getCategorybyId(id);
    if (category != null) {
      return category;
    } else {
      return category;
      // send error
    }
  }

  @PostMapping("/category")
  public int addCategory(@RequestBody Category category) {
    int id = cateroryService.saveCategory(category);
    return id;
  }

  @PostMapping("/categorys")
  public int addCategorys(@RequestBody List<Category> categorys) {
    int status = cateroryService.saveCategoryList(categorys);
    return status;
  }

  @GetMapping("/categorys")
  public List<Category> getCategorys() {
    List<Category> categoryList = cateroryService.getCategoryList();
    return categoryList;
  }

}
