import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-all-component',
  templateUrl: './all-component.component.html',
  styleUrls: ['./all-component.component.css', '../process/process.component.css']
})
export class AllComponent implements OnInit {

  componentList: any = [];
  blockedFlag: boolean;

  constructor(private restApiService: RestApiService) {
    this.blockedFlag = true;
  }

  ngOnInit() {
    this.getComponentList();
  }
  getComponentList() {
    this.restApiService.getComponents().subscribe(response => {
      this.blockedFlag = false;
      this.componentList = response;
    }, error => {
      this.blockedFlag = false;
      console.log(error);
    });
    // this.componentList = [{
    //   "id": 2,
    //   "name": "SC1",
    //   "variation_name": "Loan Marketing",
    //   "desc": "Lead Creation-Bank Branch-Retail"
    // }, {
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
}