import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /*post = [
    {
      image: '../assets/mediterranea.jpeg',
      restaurantName: 'CiccioBello',
      companyName: '',
      cuisine: [],
      phone: '',
    },
    {
      image: '',
      restaurantName: '',
      companyName: '',
      cuisine: [],
      phone: '',
    },
  ];*/
  posts: any;
  restaurants: any;

  constructor(private service: PostService) {
    //console.log(this.posts);
  }

  ngOnInit() {
    this.service.getPosts().subscribe((response) => {
      this.posts = response;
      console.log(this.posts);
    });
  }
}
