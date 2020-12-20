import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css', '../process/process.component.css',
    '../new-process/new-process.component.css']
})
export class UpdateNewComponent implements OnInit {

  variationsList: any = [];
  componentList: any = [];
  blockedFlag: boolean;
  componentName: any = '';
  componentDesc: any = '';
  componentObject: any = {};
  isAddVariation: boolean = false;
  variationName: any = '';
  variationDesc: any = '';

  constructor(private restApiService: RestApiService, private route: Router, private activatedRoute: ActivatedRoute, private confirmationService: ConfirmationService) {
    this.blockedFlag = true;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.componentName = params['id'];
      this.getComponentByName();
    });
  }
  getComponentByName() {
    this.restApiService.getComponentByName(this.componentName).subscribe(response => {
      this.blockedFlag = false;
      this.componentObject = response;
      this.componentDesc = this.componentObject.desc;
      this.variationsList = this.componentObject.variations;
    }, error => {
      this.blockedFlag = false;
      console.log(error);
    });
  }
  addVariation() {
    this.isAddVariation = true;
  }
  addNewVariation() {
    this.isAddVariation = false;
    this.variationsList.push({ variation_name: this.variationName, variation_desc: this.variationDesc });
    this.variationName = '';
    this.variationDesc = '';
  }
  saveVariation(variation) {
    this.variationsList = this.variationsList.map(varObj => {
      console.log(varObj)
      if (varObj.variation_name === variation.variation_name) {
        return variation;
      }
      return varObj;
    });
  }
  deleteVariation(variation) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete variation?',
      accept: () => {
        this.variationsList = this.variationsList.filter((varObj) => varObj.variation_name !== variation.variation_name);
      }
    });
  }
  updateComponent() {
    this.blockedFlag = true;
    this.componentObject.name = this.componentName;
    this.componentObject.desc = this.componentDesc;
    this.componentObject.variations = Object.assign(this.variationsList, []);
    this.restApiService.updateComponent(this.componentObject).subscribe(response => {
      this.blockedFlag = false;
      this.route.navigateByUrl('/component');
    }, error => {
      this.blockedFlag = false;
      console.log(error);
    });
  }
}