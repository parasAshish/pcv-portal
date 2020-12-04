import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-variation',
  templateUrl: './new-variation.component.html',
  styleUrls: ['./new-variation.component.css', '../process/process.component.css']
})
export class AddNewVariation implements OnInit {

  variationName: any = '';
  variationDesc: any = '';

  constructor() {
  }

  ngOnInit() {
  }

}