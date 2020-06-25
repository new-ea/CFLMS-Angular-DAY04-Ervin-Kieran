import { Component, OnInit } from '@angular/core';
import { blog_entries } from '../../data/entries';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent implements OnInit {
  currentBlog: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.currentBlog = blog_entries[Number(params.get('blogId'))];
    });
  }
}
