import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.page.html',
  styleUrls: ['./food-page.page.scss'],
})
export class FoodPagePage implements OnInit {

  products = [
    {
      title: "Food",
      id:1,
      price: 123,
      discountedPrice: 100,
      image: "",
      quantity: 500,
      stock: true,
      type: "gm"
    },
    {
      title: "Fish",
      id:2,
      price: 123,
      discountedPrice: 110,
      image: "",
      quantity: 200,
      stock: false,
      type: "gm"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
