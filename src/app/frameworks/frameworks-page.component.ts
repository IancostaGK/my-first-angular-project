import { Component, NgZone, effect } from '@angular/core';
import { FrameworkListComponent } from './framework-list/framework-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-frameworks-page',
  imports: [FrameworkListComponent, FormsModule],
  templateUrl: './frameworks-page.component.html',
  styleUrl: './frameworks-page.component.css',
})
export class FrameworksPageComponent {
  protected query = '';

  private readonly allFrameworks = [
    'Angular',
    'React',
    'Vue',
    'Svelte',
    'Solid',
    'Qwik',
    'Preact',
    'Ember',
    'Backbone',
    'Lit',
    'Alpine',
    'Next.js',
    'Nuxt',
    'Remix',
    'Astro',
  ];

  protected get filteredFrameworks() {
    const term = this.query.trim().toLowerCase();
    if (!term) return this.allFrameworks;
    return this.allFrameworks.filter(name => name.toLowerCase().includes(term));
  }

  protected onQueryChange(value: string) {
    this.query = value;
  }

  protected clearQuery() {
    this.query = '';
  }

  ngOnInit() {
    // Initialize query from localStorage if available
    const savedQuery = localStorage.getItem('framework-query');
    if (savedQuery) {
      this.query = savedQuery;
    }
  }

  constructor(private readonly zone: NgZone) {
    // Vue watch: react to query changes (e.g., persist or side effects)
    effect(() => {
      const value = this.query;
      localStorage.setItem('framework-query', value);
    });
  }
}
