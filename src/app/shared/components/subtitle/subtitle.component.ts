import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.scss']
})
export class SubtitleComponent {
  @Input() noMargin = false;
  @Input() noMarginBottom = false;
  @Input() opaque = false;
  @Input() secondLevel = false;

}
