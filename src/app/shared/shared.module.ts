import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavGroupComponent } from './components/nav-group/nav-group.component';
import { RouterLink } from "@angular/router";
import { TitleComponent } from './components/title/title.component';
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { CodeBlockComponent } from './components/code-block/code-block.component';
import { HIGHLIGHT_OPTIONS, HighlightModule } from "ngx-highlightjs";
import { TabGroupComponent } from './components/tab-group/tab-group.component';
import { TabComponent } from './components/tab-group/tab/tab.component';
import { ToastComponent } from './components/toast/toast.component';
import { LinkComponent } from './components/link/link.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    NavGroupComponent,
    TitleComponent,
    SubtitleComponent,
    ParagraphComponent,
    ExpansionComponent,
    CodeBlockComponent,
    TabGroupComponent,
    TabComponent,
    ToastComponent,
    LinkComponent
  ],
  exports: [
    NavGroupComponent,
    TitleComponent,
    ParagraphComponent,
    SubtitleComponent,
    ExpansionComponent,
    CodeBlockComponent,
    TabGroupComponent,
    TabComponent,
    ToastComponent,
    LinkComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
})
export class SharedModule {
}
