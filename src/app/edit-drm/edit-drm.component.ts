import { Component, OnInit } from '@angular/core';

import { DrmService } from '../drm.service'
import { Dram } from '../dram'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-drm',
  templateUrl: './edit-drm.component.html',
  styleUrls: ['./edit-drm.component.css']
})
export class EditDrmComponent implements OnInit {

  constructor(
     public drmService:DrmService,
     public route:ActivatedRoute,
     public router:Router
  ) { }

  ngOnInit() {
    this.getDram();
  }

  model = new Dram();
  id = this.route.snapshot.params['id'];
  
  getDram(){
    this.drmService.getDram(this.id)
        .subscribe(dram=>{
          this.model = dram;
        })
  }

  updateDram(){
    this.drmService.updateDram(this.id,this.model)
        .subscribe(()=> this.goBack())
  }

   goBack(){
    this.router.navigate(['/home'])
  }
}