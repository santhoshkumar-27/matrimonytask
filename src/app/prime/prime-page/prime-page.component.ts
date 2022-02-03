import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prime-page',
  templateUrl: './prime-page.component.html',
  styleUrls: ['./prime-page.component.scss']
})
export class PrimePageComponent implements OnInit {

  constructor(
    protected router: Router
  ) { }

  ngOnInit(): void {
  }

  backToRegular() {
    this.router.navigate([''])
  }
}
