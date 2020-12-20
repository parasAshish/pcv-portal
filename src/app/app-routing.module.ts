import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessComponent } from './modules/process/process.component';
import { NewProcessComponent } from './modules/new-process/new-process.component';
import { UpdateProcessComponent } from './modules/update-process/update-process.component';
import { AddNewComponent } from './modules/new-component/new-component.component';
import { AllComponent } from './modules/all-component/all-component.component';
import { UpdateNewComponent } from './modules/update-component/update-component.component';
import { NewScenarioComponent } from './modules/new-scenario/new-scenario.component';
import { AllScenario } from './modules/all-scenario/all-scenario.component';

const routes: Routes = [
  // App views
  // Main redirect
  { path: '', redirectTo: 'process', pathMatch: 'full' },
  { path: 'process', component: ProcessComponent },
  { path: 'process/:id', component: UpdateProcessComponent },
  { path: 'new-process', component: NewProcessComponent },
  { path: 'new-component', component: AddNewComponent },
  { path: 'new-scenario', component: NewScenarioComponent },
  { path: 'component', component: AllComponent },
  { path: 'component/:id', component: UpdateNewComponent },
  { path: 'scenario', component: AllScenario },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
