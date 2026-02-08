import { Component, EventEmitter, input, output } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.css',
})
export class UiButtonComponent {
  label = input.required<string>();
  clicked = output<void>();
}
