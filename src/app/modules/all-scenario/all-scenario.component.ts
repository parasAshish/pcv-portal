import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-all-scenario',
  templateUrl: './all-scenario.component.html',
  styleUrls: ['./all-scenario.component.css', '../process/process.component.css']
})
export class AllScenario implements OnInit {

  scenariosList: any = [];
  blockedFlag: boolean;

  constructor(private restApiService: RestApiService) {
    this.blockedFlag = true;
  }

  ngOnInit() {
    this.getComponentList();
  }
  getComponentList() {
    this.restApiService.getScenarios().subscribe(response => {
      this.blockedFlag = false;
      this.scenariosList = response;
    }, error => {
      this.blockedFlag = false;
      console.log(error);
    });
  }
}