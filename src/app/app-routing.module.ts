import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './component/auth/signin/signin.component';
import { SignupComponent } from './component/auth/signup/signup.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { NewPostComponent } from './component/new-post/new-post.component';
import { PostListItemComponent } from './component/post-list-item/post-list-item.component';
import { FourOhFourComponent } from './component/four-oh-four/four-oh-four.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'auth/signin', component: SigninComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'posts', canActivate: [AuthGuardService], component: PostListComponent },
  { path: 'new', canActivate: [AuthGuardService], component: NewPostComponent },
  { path: 'posts/view/:id', canActivate: [AuthGuardService], component: PostListItemComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
