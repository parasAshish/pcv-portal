import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-new-scenario',
  templateUrl: './new-scenario.component.html',
  styleUrls: ['./new-scenario.component.css', '../process/process.component.css']
})
export class NewScenarioComponent implements OnInit {

  processList: any = [];
  blockedFlag: boolean = false;
  scenarioName: any = '';
  scenarioDesc: any = '';
  processObj: any = {};
  isAddVariation: boolean = false;
  variationsList: any = [];
  selectedVariation: any = {};
  selectedVariationsList: any = [];

  constructor(private route: Router, private restApiService: RestApiService) {
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
  }
  openVariationSelection(item) {
    this.getComponentByName(item.name);
  }
  addNewScenario() {
    this.blockedFlag = true;
  }
  getComponentByName(componentName) {
    this.blockedFlag = true;
    this.restApiService.getComponentByName(componentName).subscribe(response => {
      this.blockedFlag = false;
      this.isAddVariation = true;
      this.variationsList = response.variations;
    }, error => {
      this.blockedFlag = false;
      console.log(error);
    });
  }
  addVariation() {
    this.isAddVariation = false;
    this.selectedVariationsList.push(this.selectedVariation);
  }
}