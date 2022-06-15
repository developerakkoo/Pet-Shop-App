import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  banner = [{
    image: "assets/banner.png"
  },
  {
    image: "assets/banner.png"
  }]

  categories = [
    {
      type: "DOG",
      name: "Food"
    },
    {
      type: "DOG",
      name: "Toys"
    },
    {
      type: "DOG",
      name: "Cages & Crates"
    },
    {
      type: "DOG",
      name: "Beds & Mats"
    }, {
      type: "DOG",
      name: "Food Name"
    }, {
      type: "DOG",
      name: "Food Name"
    }
  ]

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }


  openFoodPage(item){
    this.router.navigate(['food-page']);
  }

}
