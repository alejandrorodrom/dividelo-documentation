import { AfterViewInit, Component, ContentChildren, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { TabComponent } from "./tab/tab.component";
import { DataTab } from "../../interfaces/tab-group/tab.interface";
import { asyncScheduler } from "rxjs";

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements AfterViewInit {

  dataTabs: DataTab[] = [];

  @ViewChildren('tabOption') tabOptions!: QueryList<ElementRef>;
  @ContentChildren(TabComponent) tabs!: QueryList<ElementRef<TabComponent>>;

  ngAfterViewInit(): void {
    this.setDataTabs();
    this.showInitTab();
  }

  private setDataTabs(): void {
    this.tabs.toArray().forEach((value: ElementRef<TabComponent>) => {
      const { id, label, isDefault } = Object.fromEntries(Object.entries(value));
      const dataTab: DataTab = {
        id: id,
        label: label,
        isDefault: isDefault
      };
      this.dataTabs.push(dataTab);
    });
  }

  private showInitTab() {
    asyncScheduler.schedule(() => {
      const tabDefault: DataTab | undefined = this.dataTabs.find((value: DataTab) => value.isDefault);

      if (tabDefault) {
        this.showTab(tabDefault.label, tabDefault.id);
      } else {
        const firstTab: DataTab | undefined = this.dataTabs.find(() => true);
        this.showTab(firstTab!.label, firstTab!.id);
      }
    });
  }

  showTab(tabOption: string, tabContentId: string): void {
    this.activeOption(tabOption);
    this.showTabContent(tabContentId);
  }

  private activeOption(tabOption: string): void {
    const tabOptionsList: ElementRef[] = this.tabOptions.toArray();
    const tabOptionSelected: ElementRef | undefined = tabOptionsList.find((option) => {
      return option.nativeElement.textContent.trim() === tabOption;
    });
    tabOptionsList.splice(tabOptionsList.indexOf(tabOptionSelected as ElementRef), 1);
    tabOptionsList.forEach((option: ElementRef) => {
      option.nativeElement.classList.remove('active');
    });
    tabOptionSelected?.nativeElement.classList.add('active');
  }

  private showTabContent(tabContentId: string): void {
    const tabContentsList: ElementRef<TabComponent>[] = this.tabs.toArray();
    const tabContentSelected: any = tabContentsList.find((tab: ElementRef<TabComponent>) => {
      const { id } = Object.fromEntries(Object.entries(tab));
      return id === tabContentId
    });
    tabContentsList.splice(tabContentsList.indexOf(tabContentSelected as ElementRef<TabComponent>), 1);
    tabContentsList.forEach((tab: any) => {
      tab.hide()
    });
    tabContentSelected!.show();
  }

}
