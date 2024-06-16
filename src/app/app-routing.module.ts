import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {PostCoreComponent} from "./post-core/post-core.component";
import {CreatePostComponent} from "./create-post/create-post.component";

const routes: Routes = [

  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'createPost',
    component: CreatePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
