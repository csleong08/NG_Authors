import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id;
  errors;
  selectedAuthor;

  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      this.id = params.id;
      console.log(this.id);
    });
    this.showAuthor();
  }

  showAuthor(){
    console.log("getAuthor() in edit.component.ts");
    let obs = this._httpService.showAuthor(this.id);
    obs.subscribe(data => {
      console.log("Got one author!", data);
      this.selectedAuthor = data;
    });

  }
  updateAuthor(){
    console.log("updateAuthor() in edit.component.ts");
    console.log(this.selectedAuthor);
    let obs = this._httpService.updateAuthor(this.selectedAuthor);
    obs.subscribe(data => {
      console.log("author info updated!", data);
      if (data['status'] === "bad"){
        this.errors = [];
        for(let err in data['content']['errors']){
          if(err != "message" && err != "name" && err != "_message"){
            this.errors.push(data['content']['errors'][err]['message']);
          }
        }
      }else{
        this._router.navigate(['/edit/',this.id]);
      }
    })
  }
}
