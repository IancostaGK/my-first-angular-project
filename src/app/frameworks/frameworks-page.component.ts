import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { FrameworkListComponent } from './framework-list/framework-list.component';
import { FrameworkService } from './framework.service';
import { ExploreEventService } from './explore-event.service';

@Component({
  selector: 'app-frameworks-page',
  imports: [FrameworkListComponent, FormsModule],
  templateUrl: './frameworks-page.component.html',
  styleUrl: './frameworks-page.component.css',
})
export class FrameworksPageComponent {
  private readonly frameworkService = inject(FrameworkService);
  private readonly exploreEventService = inject(ExploreEventService);

  // toSignal() converts an Observable into a Signal — auto-unsubscribes when component is destroyed
  protected readonly lastExplored = toSignal(this.exploreEventService.explored$);

  protected query = this.frameworkService.getSavedQuery();

  protected get filteredFrameworks() {
    return this.frameworkService.filter(this.query);
  }

  protected onQueryChange(value: string) {
    this.query = value;
    this.frameworkService.saveQuery(value);
  }

  protected clearQuery() {
    this.query = '';
    this.frameworkService.saveQuery('');
  }
}
