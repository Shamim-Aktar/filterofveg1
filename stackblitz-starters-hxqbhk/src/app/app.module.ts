import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VegetablefilterComponent } from './vegetablefilter/vegetablefilter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, VegetablefilterComponent],
  imports: [CommonModule, BrowserModule, FormsModule],
})
export class AppModule {}
