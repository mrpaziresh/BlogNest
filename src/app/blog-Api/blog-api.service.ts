import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Post {
  // id?: number;
  title: string;
  content: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogApiService {
  private apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  showPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  createPost(post: FormData): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }
}
