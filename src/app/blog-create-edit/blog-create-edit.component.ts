import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-create-edit',
  templateUrl: './blog-create-edit.component.html',
  styleUrls: ['./blog-create-edit.component.css']
})
export class BlogCreateEditComponent implements OnInit {
  post: any = { title: '', content: '' };
  isEditMode: boolean = false;

  constructor(private route: ActivatedRoute, private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.isEditMode = true;
      this.post = this.blogService.getPost(postId);
    }
  }

  savePost(): void {
    if (this.isEditMode) {
      this.blogService.updatePost(this.post);
    } else {
      this.blogService.createPost(this.post);
    }
    this.router.navigate(['/']);
  }
}
