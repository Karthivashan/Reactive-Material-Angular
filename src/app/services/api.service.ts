import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  postProduct(data: any) {
    return this.http.post<any>("http://localhost:3000/posts/", data)
    debugger
  }

  getProduct() {
    return this.http.get("http://localhost:3000/posts/")
  }
}
