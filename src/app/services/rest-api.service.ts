import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { API } from './api';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  api: API;
  constructor(private http: HttpClient) {
    this.api = new API(environment.api.base);
  }
  getProcesses(): Observable<any> {
    return this.http.get(this.api.getProcesses);
  }
  getComponents(): Observable<any> {
    return this.http.get(this.api.getComponents);
  }
  getVariationByComponent(component): Observable<any> {
    return this.http.get(this.api.getVariationByComponent(component));
  }
  createNewProcess(processObj: any): Observable<any> {
    return this.http.post(this.api.createNewProcess(), processObj);
  }
  createNewComponent(componentObj: any): Observable<any> {
    return this.http.post(this.api.createNewComponent(), componentObj);
  }
  updateProcess(processObj: any): Observable<any> {
    return this.http.put(this.api.updateProcess(processObj), processObj);
  }
  updateComponent(compObj: any): Observable<any> {
    return this.http.put(this.api.updateComponent(compObj), compObj);
  }
}
