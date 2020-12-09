import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css', '../process/process.component.css',
    '../new-process/new-process.component.css'],
  providers: [ConfirmationService]
})
export class AddNewComponent implements OnInit {

  variationsList: any = [];
  componentList: any = [];
  blockedFlag: boolean;
  componentName: any = '';
  componentDesc: any = '';
  componentObject: any;
  isAddVariation: boolean = false;
  variationName: any = '';
  variationDesc: any = '';

  constructor(private restApiService: RestApiService, private route: Router, private confirmationService: ConfirmationService) {

  }

  ngOnInit() {
  }
  addVariation() {
    this.isAddVariation = true;
  }
  addNewVariation() {
    this.isAddVariation = false;
    this.variationsList.push({ name: this.variationName, desc: this.variationDesc });
    this.variationName = '';
    this.variationDesc = '';
  }
  saveVariation(variation) {
    this.variationsList = this.variationsList.map(varObj => {
      if (varObj.name === variation.name) {
        return variation;
      }
      return varObj;
    });
  }
  deleteVariation(variation) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete variation?',
      accept: () => {
        this.variationsList = this.variationsList.filter((varObj) => varObj.name !== variation.name);
      }
    });
  }
  addNewComponent() {
    const reqObj = { name: this.componentName, componentText: this.componentDesc, variations: this.variationsList }
    this.restApiService.createNewComponent(reqObj).subscribe(response => {
      this.blockedFlag = false;
      this.route.navigateByUrl('/component');
    }, error => {
      this.blockedFlag = false;
      console.log(error);
    });
  }
}