import {Component, OnInit} from '@angular/core';
import {BlogApiService} from "../blog-Api/blog-api.service";

@Component({
  selector: 'app-post-core',
  templateUrl: './post-core.component.html',
  styleUrls: ['./post-core.component.scss']
})
export class PostCoreComponent implements OnInit {
  id: number = 0;
  content: string = '';
  constructor(public blogApi: BlogApiService  ) {}
  ngOnInit() {

     this.getPost()
  }
    getPost() {
      this.blogApi.showPost().subscribe((res: any)=>{
      this.content = res[9].content;
      })
    }
}
