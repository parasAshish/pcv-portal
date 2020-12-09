import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-new-process',
  templateUrl: './new-process.component.html',
  styleUrls: ['./new-process.component.css', '../process/process.component.css']
})
export class NewProcessComponent implements OnInit {

  sourceComponents: any = [];
  targetComponents: any = [];
  blockedFlag: boolean = false;
  processName: any = '';
  processDesc: any = '';

  constructor(private route: Router, private restApiService: RestApiService) {
  }

  ngOnInit() {
    this.getComponentList();
  }
  navigateNewComponent() {
    this.route.navigateByUrl('/new-component');
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
  addNewProcess() {
    const reqObj = { name: this.processName, desc: this.processDesc, components: this.targetComponents }
    this.restApiService.createNewProcess(reqObj).subscribe(response => {
      this.blockedFlag = false;
      this.sourceComponents = response;
    }, error => {
      this.blockedFlag = false;
      console.log(error);
    });
  }
}