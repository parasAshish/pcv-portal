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
  componentObject: any;
  isAddVariation: boolean = false;
  variationName: any = '';
  variationDesc: any = '';

  constructor(private restApiService: RestApiService, private route: Router, private activatedRoute: ActivatedRoute, private confirmationService: ConfirmationService) {
    this.blockedFlag = true;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.componentName = params['id'];
      this.getComponentList();
    });
  }
  getComponentList() {
    this.restApiService.getComponents().subscribe(response => {
      this.componentList = response;
      this.componentObject = this.componentList.find(comp => this.componentName === comp.name);
      this.componentDesc = this.componentObject.desc;
      this.getVariationByComponent(this.componentObject);
    }, error => {
      this.blockedFlag = false;
      console.log(error);
    });
  }
  getVariationByComponent(componentObject) {
    this.restApiService.getVariationByComponent(componentObject).subscribe(response => {
      this.blockedFlag = false;
      this.variationsList = response;
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
  updateComponent() {
    this.componentObject.name = this.componentName;
    this.componentObject.com = this.componentDesc;
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