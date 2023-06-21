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
      title: 'Cuenta simple',
      items: [
        {
          name: 'Introducción',
          url: '/cuenta-simple/introduccion'
        },
        {
          name: 'Flujo',
          url: '/cuenta-simple/flujo'
        },
        {
          name: 'Personalización',
          url: '/cuenta-simple/personalizacion'
        },
        {
          name: 'Sandbox',
          url: '/cuenta-simple/sandbox'
        },
        {
          name: 'App móviles',
          url: '/cuenta-simple/app-moviles'
        }
      ]
    },
    {
      title: 'Divídelo',
      items: [
        {
          name: 'Introducción',
          url: '/dividelo/introduccion'
        },
        {
          name: 'Recursos',
          url: '/dividelo/recursos'
        },
        {
          name: 'Sandbox',
          url: '/dividelo/sandbox'
        },
        {
          name: 'Integración',
          url: '/dividelo/integracion'
        }
      ]
    }
  ];
}
