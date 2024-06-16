import {Component, OnInit} from '@angular/core';
import {BlogApiService} from "../blog-Api/blog-api.service";
import {Router} from "@angular/router";

interface Post{
  title: string,
  content: string,
  image: string,
}

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  newPost: Post = { title: '', content: '', image: '' };
  posts: Post[] = [];

  ngOnInit() {
  }
  constructor(private blogApi: BlogApiService, private router: Router  ) {
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.newPost.image = file;
    }
  }

  createPost(): void {
    if (this.newPost.title && this.newPost.content) {
      const formData = new FormData();
      formData.append('title', this.newPost.title);
      formData.append('content', this.newPost.content);
      // formData.append('image', this.newPost.image as File);

      this.blogApi.createPost(formData).subscribe((post) => {
        this.posts.push(post);
        this.newPost = { title: '', content: '', image: '' };
      });
    }

    console.log('worked');
  }

  navigate(path: string){
    this.router.navigate([path])
  }

}
