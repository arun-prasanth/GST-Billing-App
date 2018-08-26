import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productentry',
  templateUrl: './productentry.component.html',
  styleUrls: ['./productentry.component.css']
})
export class ProductentryComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  gobill() {
    this.router.navigate(['billibg']);
  }
}
