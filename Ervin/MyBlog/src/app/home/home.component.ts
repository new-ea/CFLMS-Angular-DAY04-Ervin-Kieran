import { Component, OnInit } from '@angular/core';

import { blogs } from '../blogs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  blogs = blogs;
  constructor() { }

  ngOnInit(): void {
  }

}
