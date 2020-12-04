import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-process',
  templateUrl: './new-process.component.html',
  styleUrls: ['./new-process.component.css', '../process/process.component.css']
})
export class NewProcessComponent implements OnInit {

  sourceComponents: any = [];
  targetComponents: any = [];
  constructor(private route: Router) {
  }

  ngOnInit() {
    this.sourceComponents = [{ name: 'SC1', desc: 'SC1 Description' }, { name: 'SC3', desc: 'SC3Description' }];
  }
  navigateNewComponent() {
    this.route.navigateByUrl('/new-component');
  }
  getComponentLink(item) {
    return [`/component/${item.name}`];
  }
}