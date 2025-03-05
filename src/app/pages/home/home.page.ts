import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IPost } from '@interfaces/post.interface';
import { PostService } from '@services/post.service';
import { Store } from '@ngrx/store';
import { postActions, postSelector } from '@states/post';
import { Observable, Subscription } from 'rxjs';

import * as LayoutComponents from '@components/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LayoutComponents.HeaderComponent]
})
export class HomePage implements OnInit{
  store       = inject(Store);
  // postService = inject(PostService);

  posts$: Observable<IPost[]> = this.store.select(postSelector.allPosts);
  postsSub?: Subscription;

  loadingPosts$: Observable<boolean> = this.store.select(postSelector.loadingPosts);
  errorPost$ = this.store.select(postSelector.errorGetPosts);

  formattedPosts: IPost[] = [];

  // constructor (private postService: PostService) {}
  

  ngOnInit(): void {
    // this.store.dispatch(postActions.loadingPosts());

    // this.postsSub = this.posts$.subscribe((posts) => {
    //   console.log('Posts', posts);
    //   if(posts.length === 0) {
    //     this.store.dispatch(postActions.loadingPosts());
    //   } else {
    //     const formattedPosts = posts.map((post) => {
    //       return {
    //         ...post,
    //         title: post.title.toUpperCase()
    //       }
    //     });

    //     this.formattedPosts = formattedPosts;
    //   }
    // });

    this.store.dispatch(postActions.loadingPosts());
  }

  ngOnDestroy(): void {
    this.postsSub?.unsubscribe();
  }

}
