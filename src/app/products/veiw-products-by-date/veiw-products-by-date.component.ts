import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-veiw-products-by-date',
  templateUrl: './veiw-products-by-date.component.html',
  styleUrls: ['./veiw-products-by-date.component.css']
})
export class VeiwProductsByDateComponent implements OnInit {

  searchDate = '';

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data => {
      this.searchDate = data.date;
    });

  }
}
