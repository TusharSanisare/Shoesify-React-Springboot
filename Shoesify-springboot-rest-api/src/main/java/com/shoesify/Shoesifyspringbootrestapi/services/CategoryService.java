package com.shoesify.Shoesifyspringbootrestapi.services;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.shoesify.Shoesifyspringbootrestapi.models.Category;
import com.shoesify.Shoesifyspringbootrestapi.repositories.CategoryRepo;

@Component
public class CategoryService {

  @Autowired
  private CategoryRepo categoryRepo;

  public int saveCategoryList(List<Category> categorys) {
    Iterator<Category> categoryList = categorys.iterator();
    while (categoryList.hasNext()) {
      categoryRepo.save(categoryList.next());
    }
    return 1;
  }

  public int saveCategory(Category category) {
    Category temp = categoryRepo.save(category);
    return temp.getCategory_id();
  }

  public List<Category> getCategoryList() {
    List<Category> categoryList = categoryRepo.findAll();
    return categoryList;
  }

  public Category getCategorybyId(int id) {
    Optional<Category> category = categoryRepo.findById(id);
    if (category != null) {
      return category.get();
    } else {
      return null;
    }
  }
}
