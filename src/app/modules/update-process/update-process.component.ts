import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private restApiService: RestApiService, private activatedRoute: ActivatedRoute, private route: Router) {
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
      this.targetComponents = this.processObject.components;
      this.getComponentList();
    }, error => {
      this.blockedFlag = false;
      console.log(error);
    });
    //Code to be removed -- Start
    // this.processList = [
    //   {
    //     "id": 1,
    //     "name": "LJ1",
    //     "desc": "Positive Flow-W/O Borrower provided Corrected docs",
    //     "components": [
    //       {
    //         "id": 2,
    //         "name": "SC1",
    //         "variation_name": "Loan Marketing",
    //         "desc": "Lead Creation-Bank Branch-Retail"
    //       }
    //     ]
    //   }
    // ]
    // this.processObject = this.processList.find(process => this.processName === process.name);
    // this.processDesc = this.processObject.desc;
    // this.targetComponents = this.processObject.components;
    // Code to be removed -- End
  }
  getComponentList() {
    this.restApiService.getComponents().subscribe(response => {
      this.blockedFlag = false;
      this.sourceComponents = response.filter(({ name: id1 }) => !this.targetComponents.some(({ name: id2 }) => id2 === id1));
    }, error => {
      this.blockedFlag = false;
      console.log(error);
    });
    //code to be removed
    // this.sourceComponents = [{
    //   "id": 3,
    //   "name": "SC3",
    //   "variation_name": "Borrower/Co borrower details",
    //   "desc": "Single or Multiple Borrower Lead"
    // }, {
    //   "id": 4,
    //   "name": "SC5",
    //   "variation_name": "KYC Verification",
    //   "desc": "Credit Report-Score below limit"
    // }];
  }
  getComponentLink(item) {
    return [`/component/${item.name}`];
  }
  updateProcess() {
    this.blockedFlag = true;
    this.processObject.name = this.processName;
    this.processObject.desc = this.processDesc;
    this.processObject.components = Object.assign(this.targetComponents, []);
    this.restApiService.updateProcess(this.processObject).subscribe(response => {
      this.blockedFlag = false;
      this.route.navigateByUrl('/process');
    }, error => {
      this.blockedFlag = false;
      console.log(error);
    });
  }
  navigateNewComponent() {
    this.route.navigateByUrl('/new-component');
  }
}