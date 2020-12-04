import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-update-process',
  templateUrl: './update-process.component.html',
  styleUrls: ['./update-process.component.css', '../process/process.component.css',
    '../new-process/new-process.component.css']
})
export class UpdateProcessComponent implements OnInit {

  sourceComponents = [{ name: 'SC1', desc: 'SC1 Description' }, { name: 'SC3', desc: 'SC3Description' }];
  targetComponents: any = [];
  processList: any = [];
  blockedFlag: boolean;
  processName: any = '';
  processDesc: any = '';
  processObject: any;

  constructor(private restApiService: RestApiService, private activatedRoute: ActivatedRoute) {
    this.blockedFlag = true;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.processName = params['id'];
      this.getProcessList();
    });
  }
  getProcessList() {
    this.restApiService.getProcesses().subscribe(response => {
      this.blockedFlag = false;
      this.processList = response;
      this.processObject = this.processList.find(process => this.processName === process.name);
      this.processDesc = this.processObject.desc;
    }, error => {
      this.blockedFlag = false;
      console.log(error);
    });
    this.processList = [{ name: 'test', desc: 'test description' }];
    this.processObject = this.processList.find(process => this.processName === process.name);
    this.processDesc = this.processObject.desc;
  }
  getComponentLink(item) {
    return [`/component/${item.name}`];
  }
}