import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map' ;
@Injectable()
export class DrmService {

  constructor( private http:Http) { }
  getDrams(){
    return this.http.get("http://localhost:3000/drams")
        .map(res => res.json());
  }
   addDram(info){
    return this.http.post("http://localhost:3000/drams",info)
        .map(res => res.json());
  }
  getDram(id){
    return this.http.get("http://localhost:3000/drams/"+id)
        .map(res => res.json());
  }
  deleteDram(id){
    return this.http.delete("http://localhost:3000/drams/"+id)
        .map(res => res.json());
  }
  updateDram(id, info){
    return this.http.put("http://localhost:3000/drams/"+id,info)
        .map(res => res.json());
  }
}