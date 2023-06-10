import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-http-block',
  templateUrl: './http-block.component.html',
  styleUrls: ['./http-block.component.scss']
})
export class HttpBlockComponent {

  @Input() type!: 'request' | 'response';
  @Input() verb?: string;
  @Input() link?: string;
  @Input() responseType?: 'success' | 'error';
  @Input() responseCode?: string;
  @Input() code!: string;

}
