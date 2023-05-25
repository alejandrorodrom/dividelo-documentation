import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ParagraphComponent {

  @Input() opaque = false;
  @Input() noMargin = false;

}
