import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts: any[] = [
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' }
  ];

  constructor() { }

  getPosts() {
    return this.posts;
  }

  getPost(id: string | 0) {
    return this.posts.find(post => post.id === +id);
  }

  createPost(post: any) {
    post.id = this.posts.length + 1;
    this.posts.push(post);
  }

  updatePost(updatedPost: any) {
    const index = this.posts.findIndex(post => post.id === updatedPost.id);
    if (index !== -1) {
      this.posts[index] = updatedPost;
    }
  }
}
