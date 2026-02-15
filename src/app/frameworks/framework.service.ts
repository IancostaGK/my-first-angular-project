import { Injectable, inject } from '@angular/core';
import { StorageService } from '../core/storage.service';

@Injectable({ providedIn: 'root' })
export class FrameworkService {
  private readonly storage = inject(StorageService);
  private readonly storageKey = 'framework-query';

  readonly allFrameworks: string[] = [
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

  getSavedQuery(): string {
    return this.storage.get(this.storageKey) ?? '';
  }

  saveQuery(query: string): void {
    this.storage.set(this.storageKey, query);
  }

  filter(query: string): string[] {
    const term = query.trim().toLowerCase();
    if (!term) return this.allFrameworks;
    return this.allFrameworks.filter(name => name.toLowerCase().includes(term));
  }
}
