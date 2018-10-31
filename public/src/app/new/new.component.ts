import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor = { author: "" };
  errors: any[];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() { }

  resetAuthor(){
    this.newAuthor = { author: "" };
  }

  createAuthor(){
    console.log("createAuthor() in new.component.ts");
    let obs = this._httpService.createAuthor(this.newAuthor);
    obs.subscribe(data => {
      console.log("got new Author data from post", data);
      if (data['status'] === "bad"){
        this.errors = [];
        for(let err in data['content']['errors']){
          if (err != "message" && err != "name" && err != "_message"){
            this.errors.push(data['content']['errors'][err]['message']);
          }
        }
      }else{
        this._router.navigate(['/new']);
      }
    })
  }
}
