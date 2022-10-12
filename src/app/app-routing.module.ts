import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformPageComponent } from './inform-page/inform-page.component';
import { LendingComponent } from './lending/lending.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StartRenterComponent } from './start-renter/start-renter.component';

const routes: Routes = [
  { path: '', component: LendingComponent },
  { path: 'inform-page', component: InformPageComponent },
  { path: '404', component: NotFoundComponent},
  { path: 'start-renter', component: StartRenterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
