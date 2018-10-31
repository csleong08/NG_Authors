import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { 
    this.allAuthors();
  }

  allAuthors(){
    return this._http.get('/authors');
  }

  createAuthor(newAuthor){
    return this._http.post('/authors', newAuthor);
  }
  deleteAuthor(id){
    return this._http.delete(`/authors/${id}`);
  }

  updateAuthor(data){
    return this._http.put(`/authors/${data._id}`, data);
  }

  showAuthor(id){
    return this._http.get(`/authors/${id}`)
  
  }
}


