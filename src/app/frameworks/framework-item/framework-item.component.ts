import { Component, inject, input } from '@angular/core';
import { UiButtonComponent } from '../ui-button/ui-button.component';
import { ExploreEventService } from '../explore-event.service';

@Component({
  selector: 'app-framework-item',
  imports: [UiButtonComponent],
  templateUrl: './framework-item.component.html',
  styleUrl: './framework-item.component.css',
})
export class FrameworkItemComponent {
  private readonly exploreEventService = inject(ExploreEventService);

  name = input.required<string>();

  protected explore() {
    const query = encodeURIComponent(this.name());
    window.open(`https://www.google.com/search?q=${query}+framework`, '_blank');

    // Publish the event so any subscriber knows which framework was explored
    this.exploreEventService.publish(this.name());
  }
}
