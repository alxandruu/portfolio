import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = `${window.location.protocol}//${window.location.hostname}:${location.port}/assets/data/`;
  constructor(private http: HttpClient) { }

  public getData(filename: string) {
    return this.http.get(this.baseUrl + filename);
  }
}
