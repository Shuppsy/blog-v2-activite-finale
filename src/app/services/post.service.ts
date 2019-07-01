import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
  }

  emitposts() {
    this.postsSubject.next(this.posts);
  }

  saveposts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts').on('value', (data: DataSnapshot) => {
      this.posts = data.val() ? data.val() : [];
      this.emitposts();
    }
    );
  }

  getsinglePost(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.saveposts();
    this.emitposts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.saveposts();
    this.emitposts();
  }


}
