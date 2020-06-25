import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { blogs } from '../blogs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  details;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    this.details = blogs[+params.get('detailsId')];
   });
  }

}
