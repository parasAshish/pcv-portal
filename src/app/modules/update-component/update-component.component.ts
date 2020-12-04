import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css', '../process/process.component.css']
})
export class UpdateNewComponent implements OnInit {

  sourceVariations: any = [{ name: 'Var1', desc: 'Var1 Description' }, { name: 'Var2', desc: 'Var2 Description' }];
  targetVariations: any = [];
  componentList: any = [];
  blockedFlag: boolean;
  componentName: any = '';
  componentDesc: any = '';
  componentObject: any;

  constructor(private restApiService: RestApiService, private activatedRoute: ActivatedRoute) {
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
      this.blockedFlag = false;
      this.componentList = response;
      this.componentObject = this.componentList.find(comp => this.componentName === comp.name);
      this.componentDesc = this.componentObject.desc;
    }, error => {
      this.blockedFlag = false;
      console.log(error);
    });
    this.componentList = [{ name: 'SC1', desc: 'SC1 Description' }, { name: 'SC3', desc: 'SC3Description' }];
    this.componentObject = this.componentList.find(comp => this.componentName === comp.name);
    this.componentDesc = this.componentObject.desc;
  }
}