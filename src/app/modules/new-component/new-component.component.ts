import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css', '../process/process.component.css']
})
export class AddNewComponent implements OnInit {

  sourceVariations: any = [{ name: 'Var1', desc: 'Var1 Description' }, { name: 'Var2', desc: 'Var2 Description' }];
  targetVariations: any = [];
  componentName: any = '';
  componentDesc: any = '';
  constructor(private route: Router) {
  }

  ngOnInit() {
  }
  navigateNewVariation() {
    this.route.navigateByUrl('/new-variation');
  }
}