import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExploreEventService {
  // Subject is the "event channel" — only this service can emit
  private readonly exploredSubject = new Subject<string>();

  // asObservable() exposes a read-only stream for subscribers
  readonly explored$ = this.exploredSubject.asObservable();

  publish(frameworkName: string): void {
    this.exploredSubject.next(frameworkName);
  }
}
