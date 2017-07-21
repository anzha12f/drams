import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddDrmComponent } from './add-drm/add-drm.component';
import { EditDrmComponent } from './edit-drm/edit-drm.component';
import { ShowDrmComponent } from './show-drm/show-drm.component';
import { DrmService } from  './drm.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddDrmComponent,
    EditDrmComponent,
    ShowDrmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [DrmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
