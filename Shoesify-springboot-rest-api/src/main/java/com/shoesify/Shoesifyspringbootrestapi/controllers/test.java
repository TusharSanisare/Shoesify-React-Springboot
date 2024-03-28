package com.shoesify.Shoesifyspringbootrestapi.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class test {

  @RequestMapping(value = "/test")
  public String testing() {
    return "yupp!";
  }
}
