import { Component, OnInit } from '@angular/core';
import { DrmService } from '../drm.service'
import { Dram } from '../dram'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-drm',
  templateUrl: './add-drm.component.html',
  styleUrls: ['./add-drm.component.css']
})
export class AddDrmComponent implements OnInit {
		
  constructor(
  	 public drmService:DrmService,
     public route:ActivatedRoute,
     public router:Router	
  ) { }

   ngOnInit() {
  }
  model = new Dram();
  addDram(){
    this.drmService.addDram(this.model)
        .subscribe(()=> this.goBack())
  }
   goBack(){
    this.router.navigate(['/home'])
  }
}