import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessComponent } from './modules/process/process.component';
import { NewProcessComponent } from './modules/new-process/new-process.component';
import { UpdateProcessComponent } from './modules/update-process/update-process.component';
import { AddNewComponent } from './modules/new-component/new-component.component';
import { AddNewVariation } from './modules/new-variation/new-variation.component';
import { UpdateNewComponent } from './modules/update-component/update-component.component';

const routes: Routes = [
  // App views
  // Main redirect
  { path: '', redirectTo: 'process', pathMatch: 'full' },
  { path: 'process', component: ProcessComponent },
  { path: 'process/:id', component: UpdateProcessComponent },
  { path: 'new-process', component: NewProcessComponent },
  { path: 'new-component', component: AddNewComponent },
  { path: 'new-variation', component: AddNewVariation },
  { path: 'component/:id', component: UpdateNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
