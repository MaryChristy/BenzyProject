import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { PricingComponent } from './pricing/pricing.component';
import { FlightReviewComponent } from './flight-review/flight-review.component';
import { FareSummaryComponent } from './fare-summary/fare-summary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RulesRestrictionsComponent } from './rules-restrictions/rules-restrictions.component';
import { PaymentTypeComponent } from './payment-type/payment-type.component';
import { ReconfirmationComponent } from './reconfirmation/reconfirmation.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { PolicySummaryComponent } from './reconfirmation/policy-summary/policy-summary.component';
import { PolicyHolderComponent } from './policy-holder/policy-holder.component';
import { FareSummaryVatComponent } from './fare-summary-vat/fare-summary-vat.component';
import { OmanPricingComponent } from './oman-pricing/oman-pricing.component';


@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    FlightReviewComponent,
    FareSummaryComponent,
    RulesRestrictionsComponent,
    PaymentTypeComponent,
    ReconfirmationComponent,
    SidePanelComponent,
    PolicySummaryComponent,
    PolicyHolderComponent,
    FareSummaryVatComponent,
    OmanPricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
