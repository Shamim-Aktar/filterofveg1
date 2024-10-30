import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vegetablefilter',
  templateUrl: './vegetablefilter.component.html',
  styleUrls: ['./vegetablefilter.component.scss'],
})
export class VegetablefilterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() vegetables: string[] = [];
  filterText: string = '';

  get filteredVegetables(): string[] {
    if (!this.filterText) {
      return this.vegetables;
    }
    return this.vegetables.filter((veg) =>
      veg.toLowerCase().startsWith(this.filterText.toLowerCase())
    );
  }
}
