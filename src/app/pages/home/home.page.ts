import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IPost } from '@interfaces/post.interface';
import { PostService } from '@services/post.service';
import { Store } from '@ngrx/store';
import { postActions } from '@actions/post.actions';
import { postSelector } from '@selectors/post.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit{

  // posts: IPost[] = [];
  postService = inject(PostService);
  store = inject(Store);

  // posts$ = this.postService.getPostsApi();
  posts$: Observable<IPost[]> = this.store.select(postSelector.allPosts);
  loadingPosts$ = this.store.select(postSelector.loadingPosts);
  errorPost$ = this.store.select(postSelector.errorGetPosts);

  // ngOnInit() {
  //   this.posts = this.postService.getPosts();
  // }

  ngOnInit(): void {
    this.store.dispatch(postActions.loadingPosts());
  }

}
