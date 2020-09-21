import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-dir',
  templateUrl: './structural-dir.component.html',
  styleUrls: ['./structural-dir.component.css']
})
export class StructuralDirComponent implements OnInit {

  isVisible: boolean;
  constructor() {
    this.isVisible = false;
  }

  ngOnInit() {
  }
  hide() {
    debugger;
    this.isVisible = false;
  }
  show() {
    debugger;
    this.isVisible = true;
  }
  isDivVisible() {
    debugger;
    return this.isVisible;
  }
}
