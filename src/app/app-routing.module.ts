import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddDrmComponent } from './add-drm/add-drm.component';
import { EditDrmComponent } from './edit-drm/edit-drm.component';
import { ShowDrmComponent } from './show-drm/show-drm.component';

const routes:Routes = [
	{path:'', redirectTo:'/home', pathMatch: 'full'},
	{path:'home', component:HomeComponent},
	{path:'addDrm', component:AddDrmComponent},
	{path:'editDrm/:id', component:EditDrmComponent},
	{path:'showDrm/:id', component:ShowDrmComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
