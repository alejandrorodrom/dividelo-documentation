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

@NgModule({
  declarations: [
    NavGroupComponent,
    TitleComponent,
    SubtitleComponent,
    ParagraphComponent,
    ExpansionComponent,
    CodeBlockComponent
  ],
  exports: [
    NavGroupComponent,
    TitleComponent,
    ParagraphComponent,
    SubtitleComponent,
    ExpansionComponent,
    CodeBlockComponent
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
