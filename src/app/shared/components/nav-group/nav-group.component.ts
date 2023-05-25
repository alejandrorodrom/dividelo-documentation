import { Component, Input } from '@angular/core';

export interface NavGroup {
  title: string;
  items: {
    name: string;
    url: string;
  }[]
}

@Component({
  selector: 'app-nav-group',
  templateUrl: './nav-group.component.html',
  styleUrls: ['./nav-group.component.scss']
})
export class NavGroupComponent {
  @Input() data!: NavGroup;

  isOpen = false;

  actionGroup(): void {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen)
  }
}
