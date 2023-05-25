import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss']
})
export class CodeBlockComponent {

  @Input() code!: string;

  textButton = 'Copiar';

  async copyCode(): Promise<void> {
    await navigator.clipboard.writeText(this.code);
    this.textButton = '¡Copiado!';
    setTimeout(() => {
      this.textButton = 'Copiar';
    }, 1500);
  }
}
