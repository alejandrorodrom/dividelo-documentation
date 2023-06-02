import { Component } from '@angular/core';
import { NavGroup } from "../../../shared/components/nav-group/nav-group.component";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {

  readonly data: NavGroup[] = [
    {
      title: 'Divídelo',
      items: [
        {
          name: 'Introducción',
          url: '/dividelo/introduccion'
        },
        {
          name: 'Integración',
          url: '/dividelo/integracion'
        }
      ]
    }
  ];
}
