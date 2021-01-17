import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
class Repo{
   constructor(public id : string, public name : string){ }
   ejemplo(){
    return [];
}
}
 @Injectable()

 export class ArticlesService{

    public reposCount : number =0;
    public reposObserver : Observable<Repo[]>;
    public mainRepo : Repo;
    constructor(private http : HttpClient){
       this.getMainRepo();
    }
    getAll(){
        this.reposObserver = this.http.get('https://api.github.com/users/codigofacilito/repos')
        .map((data : Object[])=>{
            return data.map((r:any) => new Repo(r.id,r.name))
        }).share();

    }
    getMainRepo(){
        fetch('https://api.github.com/users/codigofacilito/repos')
            .then(response => response.json())
            .then(repos => {
            const repoJSON = repos[repos.length -1];
            this.mainRepo = new Repo(repoJSON.id, repoJSON.name);
            console.log(this.mainRepo); 
    });

 } 
}