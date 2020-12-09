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
          },
          {
            "id": 2,
            "name": "SC3",
            "variation_name": "Borrower/Co borrower details",
            "componentText": "Single or Multiple Borrower Lead"
          },
        ]
      }
    ]
    // Code to be removed --End
  }
}