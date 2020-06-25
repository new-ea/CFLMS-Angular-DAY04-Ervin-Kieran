import { Component, OnInit } from '@angular/core';
import { blog_entries } from '../../data/entries';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  blogs = blog_entries;

  constructor() {}

  ngOnInit(): void {}
}
