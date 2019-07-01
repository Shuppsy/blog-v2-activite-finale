import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  post: Post;
  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.post = new Post('', '', Date.now(), 0);
    const id = this.route.snapshot.params.id;
    this.postService.getsinglePost(+id).then(
      (post: Post) => {
        this.post = post;
      }
    );
  }

  onBack() {
    this.router.navigate(['/posts']);
  }

}
