import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors;

  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this.allAuthors();
  }

  allAuthors(){
    let obs = this._httpService.allAuthors();
    obs.subscribe(data => {
      console.log("got allAuthors data!", data);
      this.authors = data;
      console.log(this.authors);
    })
  }
  deleteAuthor(id){
    console.log("deleteAuthor() in home.component.ts");
    let obs = this._httpService.deleteAuthor(id);
    obs.subscribe(data => {
      console.log("deleted author!", data);
      this.allAuthors();
    })
  }
}
