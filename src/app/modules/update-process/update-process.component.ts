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

  sourceComponents = [];
  targetComponents: any = [];
  processList: any = [];
  blockedFlag: boolean;
  processName: any = '';
  processDesc: any = '';
  processObject: any = {};

  constructor(private restApiService: RestApiService, private activatedRoute: ActivatedRoute) {
    this.blockedFlag = true;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.processName = params['id'];
      this.getProcessList();
      this.getComponentList();
    });
  }
  getProcessList() {
    this.restApiService.getProcesses().subscribe(response => {
      this.blockedFlag = false;
      this.processList = response;
      this.processObject = this.processList.find(process => this.processName === process.name);
      this.processDesc = this.processObject.desc;
      this.targetComponents = this.processObject.components;
    }, error => {
      this.blockedFlag = false;
      console.log(error);
    });
    //Code to be removed -- Start
    this.processList = [
      {
        "id": 1,
        "name": "LJ1",
        "desc": "Positive Flow-W/O Borrower provided Corrected docs",
        "components": [
          {
            "id": 6,
            "name": "SC1",
            "variation_name": "Loan Marketing",
            "componentText": "Lead Creation-Bank Branch-Retail"
          }
        ]
      }
    ]
    this.processObject = this.processList.find(process => this.processName === process.name);
    console.log(this.processObject)
    this.processDesc = this.processObject.desc;
    this.targetComponents = this.processObject.components;
    // Code to be removed -- End
  }
  getComponentList() {
    this.restApiService.getComponents().subscribe(response => {
      this.blockedFlag = false;
      this.sourceComponents = response;
    }, error => {
      this.blockedFlag = false;
      console.log(error);
    });
    //code to be removed
    this.sourceComponents = [{
      "id": 2,
      "name": "SC3",
      "variation_name": "Borrower/Co borrower details",
      "componentText": "Single or Multiple Borrower Lead"
    }];
  }
  getComponentLink(item) {
    return [`/component/${item.name}`];
  }
  updateProcess() {
    this.processObject.name = this.processName;
    this.processObject.desc = this.processDesc;
    this.processObject.components = Object.assign(this.targetComponents, []);
    this.restApiService.updateProcess(this.processObject).subscribe(response => {
      this.blockedFlag = false;
    }, error => {
      this.blockedFlag = false;
      console.log(error);
    });
  }
}