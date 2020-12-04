import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  processList: any = [];
  blockedFlag: boolean;

  constructor(private restApiService: RestApiService) {
    this.blockedFlag = true;
  }

  ngOnInit() {
    this.getProcessList();
  }
  getProcessList() {
    this.restApiService.getProcesses().subscribe(response => {
      this.blockedFlag = false;
      this.processList = response;
    }, error => {
      this.blockedFlag = false;
      console.log(error);
    });
    this.processList = [{ name: 'test', desc: 'test description' }];
  }
}