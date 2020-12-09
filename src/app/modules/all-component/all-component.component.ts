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
    this.componentList = [{
      "id": 6,
      "name": "SC1",
      "variation_name": "Loan Marketing",
      "componentText": "Lead Creation-Bank Branch-Retail"
    }, {
      "id": 2,
      "name": "SC3",
      "variation_name": "Borrower/Co borrower details",
      "componentText": "Single or Multiple Borrower Lead"
    }];
  }
}