import { Component, OnInit } from '@angular/core';

import { DrmService } from '../drm.service'
import { Dram } from '../dram'
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-show',
  templateUrl: './show-drm.component.html',
  styleUrls: ['./show-drm.component.css']
})
export class ShowDrmComponent implements OnInit {

  constructor(
     public drmService:DrmService,
     public route:ActivatedRoute,
     public router:Router
  ) { }

  ngOnInit() {
    this.getDram();
  }

  dram:Dram;
  getDram(){
    var id = this.route.snapshot.params['id'];
    this.drmService.getDram(id)
        .subscribe(dram=>{
          this.dram = dram;
        })
  }
  goBack(){
    this.router.navigate(['/home'])
  }
}
