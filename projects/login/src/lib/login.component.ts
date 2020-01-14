import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ca-login',
  template: `
  <div #content>
  <ng-content select="[title]"></ng-content>
  </div>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class LoginComponent implements OnInit {

  originalContent: string;
  controlledContent: string;

  @ViewChild('content', null) content: ElementRef;

  constructor() { }

  ngOnInit() {
    this.controlledContent = this.originalContent = this.content.nativeElement.textContent;
  }

}
