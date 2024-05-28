import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { AudioComponent } from './audio/audio.component';
import { EBookComponent } from './e-book/e-book.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  {
    component:HomeComponent,
    path:''
  },
  {
    component:VideoComponent,
    path:'video'
  },
  {
    component:AudioComponent,
    path:'audio'
  },
  {
    component:EBookComponent,
    path:'e-book'
  },
  {
    component:WishlistComponent,
    path:'wishlist'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
