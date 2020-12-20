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
    // Code to be removed --Start
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
    //       },
    //       {
    //         "id": 3,
    //         "name": "SC3",
    //         "variation_name": "Borrower/Co borrower details",
    //         "desc": "Single or Multiple Borrower Lead"
    //       },
    //     ]
    //   },
    //   {
    //     "name": "LJ7",
    //     "desc": "Negative Flow-Soft Decline",
    //     "components": [
    //       {
    //         "id": 2,
    //         "name": "SC1",
    //         "variation_name": "Loan Marketing",
    //         "desc": "Lead Creation-Bank Branch-Retail"
    //       },
    //       {
    //         "id": 3,
    //         "name": "SC3",
    //         "variation_name": "Borrower/Co borrower details",
    //         "desc": "Single or Multiple Borrower Lead"
    //       },
    //       {
    //         "id": 4,
    //         "name": "SC5",
    //         "variation_name": "KYC Verification",
    //         "desc": "Credit Report-Score below limit"
    //       }]
    //   }
    // ]
    // Code to be removed --End
  }
}