import { Component, input } from '@angular/core';
import { FrameworkItemComponent } from '../framework-item/framework-item.component';

@Component({
  selector: 'app-framework-list',
  imports: [FrameworkItemComponent],
  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.css',
})
export class FrameworkListComponent {
  items = input.required<string[]>();
  query = input.required<string>();
}
