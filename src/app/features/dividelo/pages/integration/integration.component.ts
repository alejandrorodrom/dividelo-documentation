import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss']
})
export class IntegrationComponent implements AfterViewInit {

  @ViewChildren('tabOption') tabOptions!: QueryList<ElementRef>;
  @ViewChildren('tabContent') tabContents!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.showTab('Integracion de componentes', 'integration');
  }

  showTab(tabOption: string, tabContentId: string): void {
    this.activeOption(tabOption);
    this.showTabContent(tabContentId);
  }

  private showTabContent(tabContentId: string): void {
    const tabContentsList: ElementRef[] = this.tabContents.toArray();
    const tabContentSelected: ElementRef | undefined = tabContentsList.find((tab) => tab.nativeElement.id === tabContentId);
    tabContentsList.splice(tabContentsList.indexOf(tabContentSelected as ElementRef), 1);
    tabContentsList.forEach(tab => {
      tab.nativeElement.setAttribute('style', 'display: none')
    });
    tabContentSelected?.nativeElement.setAttribute('style', 'display: block');
  }

  private activeOption(tabOption: string): void {
    const tabOptionsList: ElementRef[] = this.tabOptions.toArray();
    const tabOptionSelected: ElementRef | undefined = tabOptionsList.find((option) => option.nativeElement.textContent === tabOption);
    tabOptionsList.splice(tabOptionsList.indexOf(tabOptionSelected as ElementRef), 1);
    tabOptionsList.forEach(option => {
      option.nativeElement.classList.remove('active');
    });
    tabOptionSelected?.nativeElement.classList.add('active');
  }
}
