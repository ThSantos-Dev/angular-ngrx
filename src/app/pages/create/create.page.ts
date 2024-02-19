import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IPost } from '@interfaces/post.interface';
import { Store } from '@ngrx/store';
import { postActions } from '@store/states/post';

import * as LayoutComponents from '@components/layout';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LayoutComponents.HeaderComponent]
})

export class CreatePage implements OnInit {

  store = inject(Store);


  ngOnInit() {
  }

  createPost() {
    const post: IPost ={
      id: 12,
      title: 'Testando ngrx',
      body: 'nicolas gostoso',
      userId: 12
    }

    this.store.dispatch(postActions.createPost(post));
  }
}
