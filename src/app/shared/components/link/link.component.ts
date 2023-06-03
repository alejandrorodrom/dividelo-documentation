import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {

  @Input() text: string = 'Ver más';
  @Input() href!: string;
  @Input() withArrow: boolean = false;
  @Input() noUnderline: boolean = false;
  @Input() download: boolean = false;
}
