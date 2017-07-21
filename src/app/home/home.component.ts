import { Component, OnInit } from '@angular/core';

import { DrmService } from '../drm.service'
import { Dram } from '../dram'

@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public drmService:DrmService
  ) { }

  ngOnInit() {
    this.getDrams();
  }
  rat:Number;
  drams:Dram;
  getDrams(){
    this.drmService.getDrams()
        .subscribe(drams=>{
          this.drams = drams;
        })
  }
  deleteDram(id){
    this.drmService.deleteDram(id)
      .subscribe(()=>{
        this.getDrams();
      });
  }
}

