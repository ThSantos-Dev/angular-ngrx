import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IPost } from '@interfaces/post.interface';
import { Store } from '@ngrx/store';
import { postActions, postSelector } from '@store/states/post';

import * as LayoutComponents from '@components/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LayoutComponents.HeaderComponent, FormsModule]
})

export class CreatePage implements OnInit {
  store = inject(Store);
  fb = inject(FormBuilder);
  
  post: IPost = {
    title: '',
    body: '',
  };

  success$ = this.store.select(postSelector.successCreatePost);
  sucessSub?: Subscription;

  error$ = this.store.select(postSelector.errorCreatePost);
  errorSub?: Subscription;

  ngOnInit() {
    this.createForm();

    this.sucessSub = this.success$.subscribe((created) => {
      console.log('Post created', created);
    });

    this.errorSub = this.error$.subscribe((error) => {
      console.error('Error creating post', error);
    });

  }

  createForm() {
    this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  createPost() {
    if (!this.post) {
      return;
    }

    console.clear();
    console.log(this.post);

    this.store.dispatch(postActions.createPost(this.post));
  }

  ngOnDestroy() {
    this.sucessSub?.unsubscribe();
    this.errorSub?.unsubscribe();
  }
}
