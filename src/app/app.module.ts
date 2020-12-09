
import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { TopNavComponent } from './modules/nav/top-nav/top-nav.component';
import { BrowserModule, HammerGestureConfig } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Hammer from 'hammerjs';
import { SharedModule } from './modules/shared.module';
import { ProcessComponent } from './modules/process/process.component';
import { NewProcessComponent } from './modules/new-process/new-process.component';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PickListModule } from 'primeng/picklist';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RestApiService } from './services/rest-api.service';
import { HttpClientModule } from '@angular/common/http';
import { UpdateProcessComponent } from './modules/update-process/update-process.component';
import { AddNewComponent } from './modules/new-component/new-component.component';
import { AllComponent } from './modules/all-component/all-component.component';
import { UpdateNewComponent } from './modules/update-component/update-component.component';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = {
    pan: {
      direction: 6
    }, swipe: { direction: Hammer.DIRECTION_ALL },
  };
}
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ProcessComponent,
    NewProcessComponent,
    UpdateProcessComponent,
    AddNewComponent,
    AllComponent,
    UpdateNewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgProgressModule.withConfig({
      spinner: false,
      spinnerPosition: 'left',
      color: '#1B95E0',
      meteor: true
    }),
    NgProgressHttpModule,
    SharedModule,
    TableModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    PickListModule,
    BlockUIModule,
    ProgressSpinnerModule,
    HttpClientModule,
    DialogModule,
    ConfirmDialogModule
  ],
  providers: [RestApiService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
