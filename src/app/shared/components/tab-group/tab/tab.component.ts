import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  id!: string;

  @Input() label!: string;
  @Input() isDefault: boolean = false;

  @ViewChild('content') content!: ElementRef;

  ngOnInit(): void {
    this.id = Math.floor(Math.random() * Date.now()).toString();
  }

  hide(): void {
    this.content.nativeElement.setAttribute('style', 'display: none');
  }

  show(): void {
    this.content.nativeElement.setAttribute('style', 'display: block');
  }

}
