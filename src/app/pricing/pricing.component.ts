import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  panelOpenState=false
  showReview: boolean = false;
  showSidePanel: boolean = false;
  constructor() { }
  
  title=["One","Two","Three"]

  openReview() {
    this.showReview = !this.showReview;
  }
  surname = new FormControl('', [Validators.required ]);
  

  ngOnInit(): void {
  }

  openSidePanel() {
    this.showSidePanel = true;
  }

  closeSidePanel() {
    this.showSidePanel = false;
  }
}
