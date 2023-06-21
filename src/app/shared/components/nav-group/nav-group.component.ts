import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

interface ItemNavGroup {
  name: string;
  url: string;
}
export interface NavGroup {
  title: string;
  items: ItemNavGroup[]
}

@Component({
  selector: 'app-nav-group',
  templateUrl: './nav-group.component.html',
  styleUrls: ['./nav-group.component.scss']
})
export class NavGroupComponent implements OnInit {
  @Input() data!: NavGroup;

  isOpen = false;

  constructor(
    private route: Router
  ) {
  }

  ngOnInit(): void {
    // console.log(this.route.snapshot.url)
    this.route.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(value  => {
        this.isOpen = !!this.data.items.find((items: ItemNavGroup) => items.url.includes((value as NavigationEnd).url))
      })
  }

  actionGroup(): void {
    this.isOpen = !this.isOpen;
  }
}
