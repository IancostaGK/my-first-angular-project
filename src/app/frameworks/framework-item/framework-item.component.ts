import { Component, input } from '@angular/core';
import { UiButtonComponent } from '../ui-button/ui-button.component';

@Component({
  selector: 'app-framework-item',
  imports: [UiButtonComponent],
  templateUrl: './framework-item.component.html',
  styleUrl: './framework-item.component.css',
})
export class FrameworkItemComponent {
  name = input.required<string>();

  protected explore() {
    const query = encodeURIComponent(this.name());
    window.open(`https://www.google.com/search?q=${query}+framework`, '_blank');
  }
}
