import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-oman-pricing',
  templateUrl: './oman-pricing.component.html',
  styleUrls: ['./oman-pricing.component.css']
})
export class OmanPricingComponent implements OnInit {
  
  showReview: boolean = false;

  constructor() { }
  title=["Male","Female"]

  openReview() {
    this.showReview = !this.showReview;
  }
  surname = new FormControl('', [Validators.required ]);
  
  ngOnInit(): void {
  }
  
}
